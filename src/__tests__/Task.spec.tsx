import { render, screen } from "@testing-library/react";
import React from "react";
import Task from "../components/Task";

describe("Taskコンポーネントのテスト", () => {
  const onDrag = (e: React.MouseEvent) => {
    console.log("onDrag");
  };
  const onDragStart = (e: React.MouseEvent) => {
    console.log("onDragStart");
  };
  const showTaskDeleteModal = (isVisible: boolean, taskId: number) => {
    console.log("show task delete modal");
  };
  const task = {
    taskId: 0,
    taskText: "hogehoge",
    taskCreatedAt: "2022/08/18 22:33:22",
    priority: "low",
  };
  render(
    <Task
      onDrag={onDrag}
      onDragStart={onDragStart}
      showTaskDeleteModal={showTaskDeleteModal}
      taskGroupId={0}
      task={task}
    />
  );
  it("タスクテキストにhogehoge表示されていること", async () => {
    expect(await screen.findByText("hogehoge")).toBeVisible();
  });
});
