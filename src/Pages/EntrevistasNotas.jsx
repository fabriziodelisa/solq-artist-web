import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Carrousel from "../Components/Carrousel";

import "./Home.css";

const Entrevistas = () => {
    const titulo = "Entrevistas | Notas"
    const baseUrl = process.env.PUBLIC_URL + "/Multimedia/EsaConviccion";
    const urlImagenes = [
      `${baseUrl}/flecha.jpg`,
      `${baseUrl}/corazon.jpg`,
    ];

    return(
        <div className='principal'>
          <div className='sidebar'>
          <Sidebar />
          </div>
          <div className="content">
            <Header/>
            <h3>EN CONSTRUCCIÓN</h3>
            <br/>
            <div classname = "carrousel">
            <Carrousel urlImagenes={urlImagenes} titulo={titulo}/>
            </div>
          </div>
        </div>
    )
};

export default Entrevistas;