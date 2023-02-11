import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Root from "./pages/Root";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home/:projectId" element={<Home />} />
          <Route path="/home" element={<Projects />} />
          {/* 上記以外は/homeにリダイレクトするようにする */}
          <Route path="*" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
