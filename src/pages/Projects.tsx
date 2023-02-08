import React from "react";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";

const StyledPage = styled.div`
  padding: 10px;
`;

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
      <StyledPage>
        <p>プロジェクト一覧</p>
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={`project-${index}`} />;
        })}
      </StyledPage>
    </>
  );
}
