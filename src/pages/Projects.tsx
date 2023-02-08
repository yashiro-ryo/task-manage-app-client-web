import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "hogehoge",
    },
    {
      id: 2,
      name: "fugafuga",
    },
  ];

  return (
    <>
      {projects.map((project, index) => {
        return <ProjectCard project={project} key={`project-${index}`} />;
      })}
    </>
  );
}
