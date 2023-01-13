import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { TaskType } from "../types/task";
import DeleteButton from "./DeleteButton";

type Props = {
  onDrag: (e: React.MouseEvent) => void;
  onDragStart: (e: React.MouseEvent) => void;
  taskGroupId: number;
  task: TaskType;
};

const StyledCard = styled(Card)`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const TaskText = styled.div`
  display: flex;
  justify-content: start;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
`;

export default function Task(props: Props) {
  return (
    <StyledCard
      draggable={true}
      onDrag={props.onDrag}
      onDragStart={props.onDragStart}
      data-task-id={props.task.taskId}
      data-task-group-id={props.taskGroupId}
    >
      <TaskText>{props.task.taskText}</TaskText>
      <ButtonGroup>
        <DeleteButton />
      </ButtonGroup>
    </StyledCard>
  );
}
