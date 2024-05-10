import Carrousel from '../Components/Carrousel';
import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';
import "./Home.css";

const TuRecuerdo = () => {
    const titulo = "Todo lo que tu recuerdo me trajo";
    const baseUrl = process.env.PUBLIC_URL + "/Multimedia/TuRecuerdo";
    const urlImagenes = [
      `${baseUrl}/tu-recuerdo-1.jpg`,
      `${baseUrl}/tu-recuerdo-2.jpg`,
      `${baseUrl}/tu-recuerdo-3.jpg`,
      `${baseUrl}/tu-recuerdo-4.jpg`,
      `${baseUrl}/tu-recuerdo-5.jpg`,
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
            <p>Instalación mueble, alfombra y sistema</p>
            <p>Una biblioteca se empaña de forma gradual</p>
            <p>Medidas variables</p>
            <p>2015</p>
            <br/>
            <p>LXIX Salón de Nacional Rosario. Museo Castagnino</p>
            <br/>
            <p>Los objetos cotidianos tienen una carga, una poética. 
                En ellos están presentes las huellas de nuestro habitar, de nuestro ser. 
                Y es que, como plantea Ilya Prigogine, vivimos muy intensamente en la materia. 
                Éstos nos dicen, nos hablan, nos transportan a otro tiempo, nos evocan un recuerdo. 
                “Todo lo que tu recuerdo me trajo” busca reflexionar sobre lo climático de estas sensaciones. 
            </p>
          </div>
        </div>
    )
}

export default TuRecuerdo;