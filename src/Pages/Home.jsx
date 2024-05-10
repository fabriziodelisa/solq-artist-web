import Carrousel from "../Components/Carrousel";
import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';

import "./Home.css";

const Home = () => {
  const baseUrl = process.env.PUBLIC_URL + "/Multimedia";
  const titulo = "Proyectos";
  const urlImagenes = [
    `${baseUrl}/cover-proyecto.jpg`,
    `${baseUrl}/cover-proyecto.jpg`,
  ];

  return (
    <div className='principal'>
      <div className='sidebar'>
      <Sidebar />
      </div>
      <div className="content">
        <Header/>
        <div classname = "carrousel">
          <Carrousel urlImagenes={urlImagenes} titulo = {titulo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
