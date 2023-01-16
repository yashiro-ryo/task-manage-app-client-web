import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { io } from "socket.io-client";

const socket = io("http://localhost:5050");

function App() {
  const [groups, setGroups] = useState([]);
  socket.on("connect", () => {
    console.log("socket connected");
  });
  socket.on("init-tasks", (data: any) => {
    console.log(data);
    setGroups(data);
  });
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/home/:domainId/:projectId"
            element={<Home groups={groups} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
