import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { io } from "socket.io-client";
import { TaskGroup } from "./types/task";

const socket = io("http://localhost:5050");

function App() {
  const [groups, setGroups] = useState<Array<TaskGroup>>([]);
  socket.on("connect", () => {
    console.log("socket connected");
  });
  socket.on("init-tasks", (data: Array<TaskGroup>) => {
    console.log(data);
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
