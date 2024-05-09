import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Conviccion from "./Pages/Conviccion";
import Bio from "./Pages/Bio";
import ArtistaInterior from "./Pages/ArtistaInterior";
import TuRecuerdo from "./Pages/TuRecuerdo";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/conviccion" element={<Conviccion />} />
              <Route path="/artista-interior" element={<ArtistaInterior/>}/>
              <Route path="/tu-recuerdo" element={<TuRecuerdo/>}/>
              <Route path="/biografia" element={<Bio />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Conviccion />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
