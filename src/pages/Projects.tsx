import React, { useContext, useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import CreateProjectModal from "../components/CreateProjectModal";
import axios from "axios";
import url from "../etc/url";
import { UserContext } from "../App";

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
  flex-wrap: wrap;
  overflow-x: auto;
  height: calc(100% - 61px);
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export default function Project() {
  const [isCreateProjectModalVisible, setCreateProjectModalVisible] =
    useState(false);
  const [projects, setProjects] = useState<
    Array<{ projectId: number; projectName: string }>
  >([]);
  const user = useContext(UserContext).user;
  const serverUrl = url.getServerApi(process.env.NODE_ENV);
  useEffect(() => {
    user?.getIdToken(true).then((token) => {
      console.log(token);
      console.log("get projects");
      axios
        .get(serverUrl + "/api/v1/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data: any) => {
          console.log(data.data);
          if (data.data.hasError) {
            //window.location.href = serverUrl + "/signin";
            console.log(data);
          } else {
            console.log(data.data.data);
            setProjects(data.data.data);
          }
        })
        .catch((e) => {
          console.error(e);
          //window.location.href = serverUrl + "/signin";
        });
    });
  }, [user]);

  const showCreateProjectModal = () => {
    setCreateProjectModalVisible(true);
  };

  return (
    <>
      <StyledPage>
        <PageHeader>
          <PageTitle>プロジェクト一覧</PageTitle>
          <Button variant="primary" onClick={() => showCreateProjectModal()}>
            プロジェクト作成
          </Button>
        </PageHeader>
        <ProjectList>
          {projects.length === 0 ? (
            <p>プロジェクトが存在しません。</p>
          ) : (
            projects.map((project, index) => {
              return <ProjectCard project={project} key={`project-${index}`} />;
            })
          )}
        </ProjectList>
        <CreateProjectModal
          isVisible={isCreateProjectModalVisible}
          setVisible={setCreateProjectModalVisible}
        />
      </StyledPage>
    </>
  );
}
