import { Card } from "react-bootstrap";
import styled from "styled-components";
import Task from "./Task";
import AddButton from "./AddButton";
import React, { useState } from "react";
import { TaskGroup, TaskType } from "../types/task";
import DropZone from "./DropZone";
import TaskEditor from "./TaskEditor";
import TaskDeleteModal from "./TaskDeleteModal";
import CardOption from "./CardOption";
import { Socket } from "socket.io-client";
import Log from "../etc/log";
import { socketIO } from "../socket/socket";

type Props = {
  onDrag: (e: React.MouseEvent) => void;
  onDragOver: (e: React.MouseEvent) => void;
  onDragStart: (e: React.MouseEvent) => void;
  onDrop: (e: React.MouseEvent) => void;
  taskGroup: TaskGroup;
  socket: Socket;
};

const StyledCard = styled(Card)`
  width: 300px;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardTitle = styled.h5`
  margin-bottom: 5px;
`;

export default function CardComp(props: Props) {
  const [isTaskEditorVisible, setTaskEditorVisible] = useState(false);
  const [isTaskDeleteModalVisible, setTaskDeleteModalVisible] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(0);
  const [isTaskGroupDeleteModalVisible, setTaskGroupDeleteModalVisible] =
    useState(false);
  const [taskGroupDeleteText, setTaskGroupDeleteText] = useState("");
  const showTaskDeleteModal = (isVisible: boolean, taskId: number) => {
    setTaskDeleteModalVisible(isVisible);
    Log.v(taskId);
    setDeleteTaskId(taskId);
  };

  const showTaskGroupDeleteModal = (isVisible: boolean) => {
    setTaskGroupDeleteText(
      `タスクグループを削除しても良いですか?\n${props.taskGroup.tasks.length}件のタスクも削除されます。`
    );
    setTaskGroupDeleteModalVisible(isVisible);
    Log.v(props.taskGroup.taskGroupId);
  };

  const deleteTask = () => {
    const socket = socketIO.getSocket();
    if (socket === undefined) {
      return;
    }
    socket.emit("delete-task", {
      taskId: deleteTaskId,
      projectId: 1,
    });
  };

  const deleteTaskGroup = () => {
    Log.v("タスクグループ削除" + props.taskGroup.taskGroupId);
    const socket = socketIO.getSocket();
    if (socket === undefined) {
      return;
    }
    socket.emit("delete-taskgroup", {
      projectId: 1,
      taskGroupId: props.taskGroup.taskGroupId,
    });
  };

  return (
    <StyledCard
      onDragOver={props.onDragOver}
      data-task-group-id={props.taskGroup.taskGroupId}
    >
      <StyledCardHeader>
        <CardTitle>{props.taskGroup.taskGroupText}</CardTitle>
        <CardOption showModal={showTaskGroupDeleteModal} />
      </StyledCardHeader>
      <DropZone
        taskGroupId={props.taskGroup.taskGroupId}
        dropZoneId={0}
        onDrop={props.onDrop}
      />
      {props.taskGroup.tasks.map((value: TaskType, index: number) => {
        return (
          <div key={`${value.taskId}-task-wrapper`}>
            <Task
              onDrag={props.onDrag}
              onDragStart={props.onDragStart}
              key={value.taskId}
              taskGroupId={props.taskGroup.taskGroupId}
              task={value}
              showTaskDeleteModal={showTaskDeleteModal}
            />
            <DropZone
              taskGroupId={props.taskGroup.taskGroupId}
              dropZoneId={index + 1}
              onDrop={props.onDrop}
            />
          </div>
        );
      })}
      <AddButton setTaskEditorVisible={setTaskEditorVisible} />
      <TaskEditor
        isVisible={isTaskEditorVisible}
        setVisible={setTaskEditorVisible}
        taskGroup={props.taskGroup}
      />
      <TaskDeleteModal
        isVisible={isTaskGroupDeleteModalVisible}
        setVisible={setTaskGroupDeleteModalVisible}
        deleteCb={deleteTaskGroup}
        cancelCb={() => Log.v("aiueo")}
        modalBodyText={taskGroupDeleteText}
      />
      <TaskDeleteModal
        isVisible={isTaskDeleteModalVisible}
        setVisible={setTaskDeleteModalVisible}
        deleteCb={() => {
          Log.v("deleteTask");
          deleteTask();
        }}
        cancelCb={() => {
          Log.v("cancelDeleteTask");
        }}
        modalBodyText={"タスクを削除しても良いですか?"}
      />
    </StyledCard>
  );
}
