import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home/:domainId/:projectId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
