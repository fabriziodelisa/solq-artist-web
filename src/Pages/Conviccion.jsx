import Carrousel from '../Components/Carrousel';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from '../Components/Sidebar';
import "./Home.css";

const Conviccion = () => {
    return (
        <div className='principal'>
          <div className='sidebar'>
          <Sidebar />
          </div>
          <div className="content">
            <Header/>
            {/* <div classname = "carrousel">
            <Carrousel/>
            </div> */}
            <h3><u>Esa convicción interior, invencible</u></h3>
            <img src="../Multimedia/EsaConviccion/entero.jpg" alt="obra entera"/>

           
           
            <Footer/>
          </div>
        </div>
      );
    };

export default Conviccion;