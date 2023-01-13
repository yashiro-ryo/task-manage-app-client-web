import React from "react";
import TaskGroupCard from "../components/TaskGroupCard";
import { groups } from "../etc/dummyData";
import { TaskGroup } from "../types/task";
import styled from "styled-components";

const StyledHomePage = styled.div`
  display: flex;
  padding: 20px;
`;

export default function Home() {
  return (
    <StyledHomePage>
      {groups.map((value: TaskGroup, index: number) => {
        return <TaskGroupCard tasks={value} key={index} />;
      })}
    </StyledHomePage>
  );
}
