import React, { useState } from "react";
import TaskField from "../components/TaskField";
import { TaskGroup } from "../types/task";
import { Socket } from "socket.io-client";
import ConnectionStatusToast from "../components/ConnectionStatusToast";

type Props = {
  groups: Array<TaskGroup>;
  socket: Socket;
};

export default function Home(props: Props) {
  // toast
  const [isToastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastType, setToastType] = useState<"light" | "danger">("light");

  props.socket
    .on("connect", () => {
      console.log("socket connected");
      setToastVisible(true);
      setToastText("接続されました");
      setToastType("light");
    })
    .on("disconnect", () => {
      console.log("socket disconnected");
      setToastVisible(true);
      setToastText("オフライン");
      setToastType("danger");
    });
  return (
    <>
      <TaskField groups={props.groups} socket={props.socket} />
      <ConnectionStatusToast
        isVisible={isToastVisible}
        setVisible={setToastVisible}
        text={toastText}
        type={toastType}
      />
    </>
  );
}
