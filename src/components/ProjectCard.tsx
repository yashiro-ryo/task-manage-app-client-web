import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import ProjectOption from "./ProjectOption";
import { Link } from "react-router-dom";

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

const StyledCardBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  :hover {
    color: #636363;
  }
`;

export default function ProjectCard(props: Props) {
  return (
    <StyledCard>
      <StyledCardBody>
        <StyledLink to={`/home/${props.project.id}`}>
          {props.project.name}
        </StyledLink>
        <ProjectOption />
      </StyledCardBody>
    </StyledCard>
  );
}
