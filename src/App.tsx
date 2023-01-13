import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* Navbar */}
      <div>navbar</div>
      {/* Page */}
      <BrowserRouter>
        <Routes>
          <Route path="/home/:domainId/:projectId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
