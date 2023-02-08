import React from "react";
import { Card } from "react-bootstrap";

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
      <p>{props.project.name}</p>
    </Card>
  );
}
