import React from "react";
import TaskField from "../components/TaskField";
import { TaskGroup } from "../types/task";

type Props = {
  groups: Array<TaskGroup>;
};

export default function Home(props: Props) {
  return <TaskField groups={props.groups} />;
}
