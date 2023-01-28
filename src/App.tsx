import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { io } from "socket.io-client";
import { TaskGroup } from "./types/task";
import url from "./etc/url";
import Log from "./etc/log";

// 接続先
const serverUrl = url.getServerApi(process.env.NODE_ENV);
Log.v(serverUrl);
const socket = io(serverUrl);

function App() {
  const [groups, setGroups] = useState<Array<TaskGroup>>([]);

  socket.on("init-tasks", (data: Array<TaskGroup>) => {
    Log.v(data);
    setGroups(data);
  });

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/home/:projectId"
            element={<Home groups={groups} socket={socket} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
