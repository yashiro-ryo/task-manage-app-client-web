import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Root from "./pages/Root";
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
          <Route path="/home" element={<Projects />} />
          {/* 上記以外は/homeにリダイレクトするようにする */}
          <Route path="*" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
