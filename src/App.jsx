import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <div className="header">
            <Header />
          </div>
          <div className="content-navigator">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
