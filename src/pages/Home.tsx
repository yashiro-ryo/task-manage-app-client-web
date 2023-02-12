import React, { useEffect, useState } from "react";
import TaskField from "../components/TaskField";
import { TaskGroup } from "../types/task";
import ConnectionStatusToast from "../components/ConnectionStatusToast";
import Log from "../etc/log";
import { socketIO } from "../socket/socket";
import url from "../etc/url";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import ErrorModal from "../components/ErrorModal";

export default function Home() {
  // toast
  const [isToastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastType, setToastType] = useState<"light" | "danger">("light");
  const [groups, setGroups] = useState<Array<TaskGroup>>([]);
  const [isErrorModalVisible, setErrorModalVisible] = useState(false);
  const [errorText, setErrorText] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  let setupPrepared = false;
  useEffect(() => {
    if (!setupPrepared) {
      socketIO
        .createConnection(url.getServerApi(process.env.NODE_ENV))
        .then(() => {
          const socket = socketIO.getSocket();
          if (socket === undefined) {
            return;
          }
          socket
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
            })
            .on("init-tasks", (data: Array<TaskGroup>) => {
              Log.v(data);
              setGroups(data);
            })
            .on("error-invalid-projectId", () => {
              console.error("invalid projectId");
              setErrorModalVisible(true);
              setErrorText("指定したprojectは表示できません。");
            })
            .on("error", () => {
              console.error("unexpected error");
              setErrorModalVisible(true);
              setErrorText("予期しないエラーが発生しました。");
            })
            .emit("get-tasks", { projectId: params.projectId });
        });
      setupPrepared = true;
    }
  }, []);

  const redirectToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <TaskField groups={groups} />
      <ConnectionStatusToast
        isVisible={isToastVisible}
        setVisible={setToastVisible}
        text={toastText}
        type={toastType}
      />
      <ErrorModal
        isVisible={isErrorModalVisible}
        setVisible={setErrorModalVisible}
        errorText={errorText}
        cb={redirectToHome}
      />
    </>
  );
}
