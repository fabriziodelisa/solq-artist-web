import Carrousel from "../Components/Carrousel";
import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';

import "./Home.css";

const Home = () => {
  const titulo = "_";
  const baseUrl = process.env.PUBLIC_URL + "/Multimedia/EsaConviccion";
  const urlImagenes = [
    `${baseUrl}/flecha.jpg`,
    `${baseUrl}/corazon.jpg`,
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
