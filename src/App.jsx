import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Statement from "./Pages/Statement";
import Contacto from "./Pages/Contacto";

import "./App.css";
import Bio from "./Pages/Bio";
import Conviccion from "./Pages/Conviccion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/conviccion" element={<Conviccion />} />
              <Route path="/statement" element={<Statement />} />
              <Route path="/biografia" element={<Bio />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Home />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
