import Sidebar from '../Components/Sidebar';

import "./Home.css";

const Home = () => {
  const baseUrl = process.env.PUBLIC_URL + "/Multimedia/EsaConviccion/corazon.jpg";

  return (
    <div className='principal'>
      <div className='sidebar'>
      <Sidebar />
      </div>
      <div className="content">
        <div classname = "carrousel">
          <img src={baseUrl} alt="corazon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
