import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
