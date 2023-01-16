import React, { useState } from "react";
import TaskField from "../components/TaskField";
import { io } from "socket.io-client";

const socket = io("http://localhost:5050");

export default function Home() {
  const [groups, setGroups] = useState([])
  socket.on("connect", () => {
    console.log("socket connected");
  });
  socket.on("init-tasks", (data: any) => {
    console.log(data);
    setGroups(data)
  });
  return <TaskField groups={groups} />;
}
