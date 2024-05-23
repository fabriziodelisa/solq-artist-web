import Carrousel from '../Components/Carrousel';
import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';
import "./Home.css";

const Conviccion = () => {
  const titulo = "Esa convicción interior, invencible";
  const baseUrl = process.env.PUBLIC_URL + "/Multimedia/EsaConviccion";
  const urlImagenes = [
    `${baseUrl}/entero.jpg`,
    `${baseUrl}/corazon.jpg`,
    `${baseUrl}/interior.jpg`,
    `${baseUrl}/entero2.jpg`,
    `${baseUrl}/castagnino2.jpeg`,
    `${baseUrl}/castagnino1.jpeg`,
  ];

    return (
        <div className='principal'>
          <div className='sidebar'>
          <Sidebar />
          </div>
          <div className="content">
            <Header/>
            <div classname = "carrousel">
            <Carrousel urlImagenes={urlImagenes} titulo={titulo}/>
          </div>
          <div className= "pie-foto" id='pie-foto'>
          <p>
            Esa convicción interior, invencible <br/>
            Intervención compuesta por 32 piezas de hierro pavonado amuradas a la pared<br/>
            Medidas variables<br/>
            2023<br/>
            Colección Museo Castagninomacro
          </p>
          <br/>
          </div>
          <div className='texto'>
            <p>Desde el año 2000 la plazoleta que rodea al Museo Castagnino lleva el nombre de Emilia Bertolé. 
              Es un espacio lleno de árboles, césped y sol. El cartel que indicaba su nombre ya no está. Brea y Pan me invitaron a pensar en ella, 
              en ese espacio y en la idea de un museo ampliado.
            </p>
            <br/>
            <p>
            Un día hurgando en mis cuadernos viejos y pensando qué hacer encontré una frase. 
            La había copiado de una carta escrita a puño y letra por Emilia en 1918 que decía así: 
            “Tengo del arte, ahora, un concepto definido. Con esto ya me siento extraordinariamente fuerte. 
            Es increíble cómo da fortaleza esa convicción interior, increíble”. Como un eco las palabras me quedaron 
            dando vueltas y en una cerrada y alargada letra manuscrita leí invencible en vez de increíble, pensé en hacer un grafitti grande, 
            quise escribirlo como un recordatorio y le dibujé un corazón.
            </p>
            <br/>
            <p>emilia te dibuje un corazón</p>
            <p>emilia escribí una frase tuya en el museo</p>
            <p>le cambié el final</p>
            <p>emilia lo siento así</p>
            <p>emilia la fuerza interior</p>
            <p>es</p>
            <p>invencible</p>
            <p>emilia,</p>
            <p>como un grafiti</p>
            <p>emilia, ey! en la pared</p>
            <p>bien grande!</p>
            <p>vení</p>
          </div>
          </div>
        </div>
      );
    };

export default Conviccion;