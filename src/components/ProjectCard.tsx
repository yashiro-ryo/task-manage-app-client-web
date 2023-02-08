import React from "react";
import { Card } from "react-bootstrap";
import ProjectOption from "./ProjectOption";

type Props = {
  project: Project;
};

type Project = {
  id: number;
  name: string;
};

export default function ProjectCard(props: Props) {
  return (
    <Card>
      <ProjectOption />
      <p>{props.project.name}</p>
    </Card>
  );
}
