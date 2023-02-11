import React, { useEffect, useState } from "react";
import TaskField from "../components/TaskField";
import { TaskGroup } from "../types/task";
import { Socket } from "socket.io-client";
import ConnectionStatusToast from "../components/ConnectionStatusToast";
import Log from "../etc/log";
import { SocketIO } from "../socket/socket";
import url from "../etc/url";

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
      Log.v("socket connected");
      setToastVisible(true);
      setToastText("接続されました");
      setToastType("light");
    })
    .on("disconnect", () => {
      Log.v("socket disconnected");
      setToastVisible(true);
      setToastText("オフライン");
      setToastType("danger");
    });

  let setupPrepared = false;
  useEffect(() => {
    if (!setupPrepared) {
      const socketIO = new SocketIO();
      socketIO
        .createConnection(url.getServerApi(process.env.NODE_ENV))
        .then(() => {
          const socket = socketIO.getSocket();
          if (socket === undefined) {
            return;
          }
          socket
            .on("connect", () => {
              console.log("接続さえれたし");
            })
            .on("disconnect", () => {
              console.log("接続切れたし");
            });
        });
      setupPrepared = true;
    }
  }, []);
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
