import Carrousel from '../Components/Carrousel';
import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';
import "./Home.css";

const ArtistaInterior = () => {
    const titulo = "Artista del Interior";
    const baseUrl = process.env.PUBLIC_URL + "/Multimedia/ArtistaInterior";
    const urlImagenes = [
      `${baseUrl}/munar1.jpg`,
      `${baseUrl}/munar2.jpg`,
      `${baseUrl}/munar3.jpg`,
    ];
    return(
        <div className='principal'>
          <div className='sidebar'>
          <Sidebar />
          </div>
          <div className="content">
            <Header/>
            <div classname = "carrousel">
            <Carrousel urlImagenes={urlImagenes} titulo={titulo}/>
            </div>
            <div className='pie-foto'>
              <p>Escudo repujado sobre lámina de cobre<br/>
              Reversión del Escudo Municipal de la ciudad de Rosario creado por el artista Julio Vanzo<br/>
              30 x 40 cm<br/>
              2020</p>
              <br/>
            </div>
            <div classname = "texto">
              <p>Un símbolo es un elemento u objeto material que, por convención o asociación, se considera representativo de una entidad, de una idea o de una cierta condición. “Artista del interior” es una reinterpretación del Escudo de la Municipalidad de la ciudad de Rosario realizado en 1964 por el artista rosarino Julio Vanzo. Rosario fue el lugar de mi formación y es el lugar en el que produzco como artista. Esta pieza es parte de una serie de “escudos”
              realizados sobre una lámina muy fina de cobre. Buscan reconocer mi territorio, celebrar a sus artistas, creando una escudería blanda, sensible. 
              </p>
            </div>
          </div>
        </div>
    )
}

export default ArtistaInterior;