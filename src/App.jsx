import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Conviccion from "./Pages/Conviccion";
import Bio from "./Pages/Bio";
import ArtistaInterior from "./Pages/ArtistaInterior";
import TuRecuerdo from "./Pages/TuRecuerdo";
import MundoFantasia from "./Pages/MundoFantasia";
import Entrevistas from "./Pages/EntrevistasNotas";
import Talleres from "./Pages/Talleres";
import MundoFantasiaRosaGalisteo from "./Pages/MundoFantasiaRosaGalisteo";
import MundoFantasiaCuradora from "./Pages/MundoFantasiaCuradora";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
            <Routes>
              <Route path="/artista-interior" element={<ArtistaInterior/>}/>
              <Route path="/biografia" element={<Bio />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/conviccion" element={<Conviccion />} />
              <Route path="/entrevistas-notas" element={<Entrevistas />} />
              <Route path="/" element={<Home />} />
              <Route path="/mundo-fantasia" element={<MundoFantasia/>}/>
              <Route path="/mundo-fantasia-curadora" element={<MundoFantasiaCuradora/>}/>
              <Route path="/mundo-fantasia-rosa-galisteo" element={<MundoFantasiaRosaGalisteo/>}/>
              <Route path="/talleres" element={<Talleres />} />
              <Route path="/tu-recuerdo" element={<TuRecuerdo/>}/>
              <Route path="*" element={<Home />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
