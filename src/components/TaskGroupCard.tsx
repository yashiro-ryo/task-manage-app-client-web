import React from "react";
import { Card } from "react-bootstrap";
import { TaskGroup } from "../types/task";
import styled from "styled-components";

type Props = {
  tasks: TaskGroup;
};

const StyledTaskGroupCard = styled(Card)`
  margin-right: 10px;
  width: 300px;
`;

export default function TaskGroupCard(props: Props) {
  return (
    <StyledTaskGroupCard>
      <Card.Body>{props.tasks.taskGroupText}</Card.Body>
    </StyledTaskGroupCard>
  );
}
