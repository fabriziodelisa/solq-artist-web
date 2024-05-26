import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
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
    <HashRouter>
      <div className="app">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/conviccion" element={<Conviccion />} />
              <Route path="/artista-interior" element={<ArtistaInterior/>}/>
              <Route path="/tu-recuerdo" element={<TuRecuerdo/>}/>
              <Route path="/mundo-fantasia" element={<MundoFantasia/>}/>
              <Route path="/mundo-fantasia-rosa-galisteo" element={<MundoFantasiaRosaGalisteo/>}/>
              <Route path="/mundo-fantasia-curadora" element={<MundoFantasiaCuradora/>}/>
              <Route path="/entrevistas-notas" element={<Entrevistas />} />
              <Route path="/talleres" element={<Talleres />} />
              <Route path="/biografia" element={<Bio />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Home />} />
            </Routes>
      </div>
    </HashRouter>
  );
};
export default App;
