import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';

import "./Home.css";

const Home = () => {
  const url = process.env.PUBLIC_URL + "/Multimedia/cover-proyecto.jpg";
  return (
    <div className='principal'>
      <div className='sidebar'>
      <Sidebar />
      </div>
      <div className="content">
        <Header/>
        <div classname = "carrousel">
          <img href={url} alt='cover'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
