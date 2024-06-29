import Sidebar from "../Components/Sidebar";

import "./Home.css";

const Talleres = () => {
    const seguimiento = process.env.PUBLIC_URL + "/Multimedia/Talleres/seguimiento.jpg";
    const sobremesa = process.env.PUBLIC_URL + "/Multimedia/Talleres/sobremesa.jpg";

    return(
      <div className='principal'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className="content">
          <h2><u>Talleres | Workshops</u></h2>
          <br/>
          <img src={seguimiento} alt="seguimiento de obras y proyectos" style={{ width: '500px' }} />
          <br/>
          <h6>INDIVIDUAL</h6>
          <br/>
          <p>                
            El taller está pensado para el análisis y acompañamiento de proyectos artísticos. 
            Puede ser para: el análisis del cuerpo de obra de un artista, el armado de carpetas 
            para enviar a un concurso, desarrollar el statment, trabajar en un proyecto puntual (ej: una exposición o una tesina)
          </p>
          <p>
            Los encuentros son de 1h30min aprox. La modalidad es virtual o presencial, con horarios a convenir.
          </p>
          <br/>
          <h6>GRUPAL</h6>
          <br/>
          <p>Workshops en grupos reducidos abordando temas específicos. Pronto más novedades!</p>
          <br/>
          <p>Consultas: solquirincich@gmail.com </p>
          <br/>
          <br/>
          <img src={sobremesa} alt="sobremesa" style={{ width: '500px' }} />
          <br/>
          <h6>Dictado durante los años 2021-22 en la Biblioteca y Archivo de arte contemporáneo América Elda Nancy (Rosario)</h6>
          <br/>
          <p>
          Durante seis meses propondremos una dinámica de ejercicios para pensar la obra, no sólo de manera aislada, 
          sino también en conjunto con obras y prácticas tanto propias como ajenas. Los espacios de análisis ayudan a 
          darle cuerpo a las ideas y darle palabras a aquello que aún no nombramos, eso que pensamos de forma lateral 
          de pronto se vuelve nítido cuando lo compartimos. Sobremesa nos propone acercarnos a diversos modos de hacer y pensar, 
          darnos el momento de digestión y de la deriva junto a otres.
          </p>
        </div>
      </div>
    )
};

export default Talleres;