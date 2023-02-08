import React from "react";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledPage = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #e7e7e7;
  color: #000000;
  padding: 15px;
  flex-wrap: wrap;
  overflow-x: auto;
`;

const PageTitle = styled.p`
  font-size: 20px;
`;

const ProjectList = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
        <PageHeader>
          <PageTitle>プロジェクト一覧</PageTitle>
          <Button variant="primary">プロジェクト作成</Button>
        </PageHeader>
        <ProjectList>
          {projects.map((project, index) => {
            return <ProjectCard project={project} key={`project-${index}`} />;
          })}
        </ProjectList>
      </StyledPage>
    </>
  );
}
