import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Carrousel from "../Components/Carrousel";

import "./Home.css";

const MundoFantasiaCuradora = () =>
{
    const titulo = "El mundo de la fantasía patrimonio de la humanidad [Residencia CURADORA]";
    const baseUrl = process.env.PUBLIC_URL + "/Multimedia/MundoFantasia/Curadora";
    const urlImagenes = [
        `${baseUrl}/curadora1.jpg`,
        `${baseUrl}/curadora2.jpg`,
        `${baseUrl}/curadora3.jpg`,
        `${baseUrl}/curadora4.jpg`,
        `${baseUrl}/curadora5.jpg`,
        `${baseUrl}/curadora6.jpg`,
        `${baseUrl}/curadora7.jpg`,
        `${baseUrl}/curadora8.jpg`,
        `${baseUrl}/curadora9.jpg`,
        `${baseUrl}/curadora10.jpg`,
        `${baseUrl}/curadora11.jpeg`,
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
            </div>
        </div>
    )
}

export default MundoFantasiaCuradora;