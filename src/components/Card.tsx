import { Card } from "react-bootstrap";
import styled from "styled-components";
import Task from "./Task";
import AddButton from "./AddButton";
import React, { useState } from "react";
import { TaskGroup, TaskType } from "../types/task";
import DropZone from "./DropZone";
import TaskEditor from "./TaskEditor";
import TaskDeleteModal from "./TaskDeleteModal";
import { Socket } from "socket.io-client";

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
`;

const CardTitle = styled.h5`
  margin-bottom: 5px;
`;

export default function CardComp(props: Props) {
  const [isTaskEditorVisible, setTaskEditorVisible] = useState(false);
  const [isTaskDeleteModalVisible, setTaskDeleteModalVisible] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(0);
  const showTaskDeleteModal = (isVisible: boolean, taskId: number) => {
    setTaskDeleteModalVisible(isVisible);
    console.log(taskId);
    setDeleteTaskId(taskId);
  };

  const deleteTask = () => {
    props.socket.emit("delete-task", {
      taskId: deleteTaskId,
      projectId: 1,
    });
  };

  return (
    <StyledCard
      onDragOver={props.onDragOver}
      data-task-group-id={props.taskGroup.taskGroupId}
    >
      <StyledCardHeader>
        <CardTitle>{props.taskGroup.taskGroupText}</CardTitle>
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
        socket={props.socket}
        taskGroup={props.taskGroup}
      />
      <TaskDeleteModal
        isVisible={isTaskDeleteModalVisible}
        setVisible={setTaskDeleteModalVisible}
        deleteCb={() => {
          console.log("deleteTask");
          deleteTask();
        }}
        cancelCb={() => {
          console.log("cancelDeleteTask");
        }}
      />
    </StyledCard>
  );
}
