import { Card } from "react-bootstrap";
import styled from "styled-components";
import Task from "./Task";
import AddButton from "./AddButton";
import React from "react";
import { TaskGroup, TaskType } from "../types/task";
import DropZone from "./DropZone";

type Props = {
  setTaskEditorVisible: (isVisible: boolean) => void;
  onDrag: (e: React.MouseEvent) => void;
  onDragOver: (e: React.MouseEvent) => void;
  onDragStart: (e: React.MouseEvent) => void;
  onDrop: (e: React.MouseEvent) => void;
  taskGroup: TaskGroup;
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
            />
            <DropZone
              taskGroupId={props.taskGroup.taskGroupId}
              dropZoneId={index + 1}
              onDrop={props.onDrop}
            />
          </div>
        );
      })}
      <AddButton setTaskEditorVisible={props.setTaskEditorVisible} />
    </StyledCard>
  );
}
