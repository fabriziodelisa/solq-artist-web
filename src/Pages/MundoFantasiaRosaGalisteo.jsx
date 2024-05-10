import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Carrousel from "../Components/Carrousel";

import "./Home.css";

const MundoFantasiaRosaGalisteo = () =>
{
    const titulo = "El mundo de la fantasía patrimonio de la humanidad [Rosa Galisteo]";
    const baseUrl = process.env.PUBLIC_URL + "/Multimedia/MundoFantasia/RosaGalisteo";
    const urlImagenes = [
        `${baseUrl}/1.jpg`,
        `${baseUrl}/2.jpg`,
        `${baseUrl}/3.jpg`,
        `${baseUrl}/4.jpg`,
        `${baseUrl}/5.jpg`,
        `${baseUrl}/6.jpg`,
        `${baseUrl}/7.jpg`,
        `${baseUrl}/8.jpg`,
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
            <p>Esta obra es una intervención que consta de 11 piezas que dialogan con la colección del  Museo Provincial Rosa Galisteo: 
                obras de Manuel Musto, Augusto Schiavoni, Emilia Bertolé, Mele Bruniard, Juan Grela, Sor Josefa D. y Clucellas, 
                Luis Ouvrard y Fernanda Aquere. Piezas pequeñas en un museo tomado inabarcable se dispersan por la  planta alta y baja. Como en un juego, 
                las piezas pueden tomarnos por sorpresa y develarnos  algún secreto susurrado. Aparece la firma de Josefa Díaz y Clucellas sobre unas piedras, 
                una  frase que Berni le dijo en una carta a Ouvrard, los pinceles de Musto en la mirada de  Schiavoni, las manos de Emilia Bertolé. 
            </p>
            <p>
            La mayoría de las piezas fueron producidas a partir del trabajo de investigación realizado durante la residencia 
            “Curadora” en San José del Rincón durante Septiembre del 2022.
            </p>
            <br/>
            <p>Fotos: Rodrigo Stettler</p>
            </div>
        </div>
    )
}

export default MundoFantasiaRosaGalisteo;