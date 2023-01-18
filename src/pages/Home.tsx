import React from "react";
import TaskField from "../components/TaskField";
import { TaskGroup } from "../types/task";
import { Socket } from "socket.io-client";

type Props = {
  groups: Array<TaskGroup>;
  socket: Socket;
};

export default function Home(props: Props) {
  return <TaskField groups={props.groups} socket={props.socket} />;
}
