import Sidebar from "../Components/Sidebar";
import Carrousel from "../Components/Carrousel";
import MyPdfViewer from "../Components/PdfRender";
import {useNavigate } from "react-router";

import "./Home.css";

const MundoFantasia = () => {
    const titulo = "El mundo de la fantasía, patrimonio de la humanidad";
    const baseUrl = process.env.PUBLIC_URL + "/Multimedia/MundoFantasia";
    const urlPdf = `${baseUrl}/Fe-y-Orfebreria.pdf`;
    const urlImagenes = [
      `${baseUrl}/1.jpg`,
      `${baseUrl}/2.jpg`,
      `${baseUrl}/3.jpg`,
      `${baseUrl}/4.jpg`,
      `${baseUrl}/5.jpg`,
      `${baseUrl}/6.jpg`,
    ];
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/mundo-fantasia-rosa-galisteo');
    }

    return(
        <div className='principal'>
          <div className='sidebar'>
          <Sidebar />
          </div>
          <div className="content">
            <div classname = "carrousel">
            <Carrousel urlImagenes={urlImagenes} titulo={titulo}/>
            </div>
            <div className="pie-foto">
              <p>SIN TÍTULO, de la serie Artista del interior<br/>
                Instalación (7 piezas repujadas en lámina de cobre sobre fragmento de color)<br/>
                110 x 150 cm<br/>
                2021</p>
              <br/>
            </div>
            <div className="texto">
              <p>Estas piezas son parte de una serie de emblemas que buscan reconocer 
                  mi territorio, celebrar a sus artistas creando una escudería blanda, sensible. 
                  Imagino una historia del arte compuesta de pequeños gestos. 
                  En lo próximo encuentro una tibieza que me mantiene viva, un calor que necesito.
              </p>
              <br/>
            </div>
            <MyPdfViewer urlPdf={urlPdf}/>
            <br/>
            <br/>
            <button className="btn" onClick={handleClick}  style={{ fontWeight: 900 }}>INTERVENCIÓN ROSA GALISTEO</button>
          </div>
        </div>
    )
}

export default MundoFantasia;