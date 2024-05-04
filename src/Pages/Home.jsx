import Carrousel from '../Components/Carrousel';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from '../Components/Sidebar';
import "./Home.css";
const Home = () => {
  return (
    <div className='principal'>
      <div className='sidebar'>
      <Sidebar />
      </div>
      <div className="content">
        <Header/>
        <div classname = "carrousel">
          <Carrousel/>
        </div>
        <p>texto obra</p>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
