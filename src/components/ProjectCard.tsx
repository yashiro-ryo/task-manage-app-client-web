import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import ProjectOption from "./ProjectOption";

type Props = {
  project: Project;
};

type Project = {
  id: number;
  name: string;
};

const StyledCard = styled(Card)`
  margin: 0 10px 10px 0;
  width: 250px;
`;

export default function ProjectCard(props: Props) {
  return (
    <StyledCard>
      <Card.Body>
        <ProjectOption />
        <p>{props.project.name}</p>
      </Card.Body>
    </StyledCard>
  );
}
