import Carrousel from '../Components/Carrousel';
import TextoObra from '../Components/TextoObra';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from '../Components/Sidebar';
import "./Home.css";
const Home = () => {
  const texto = 'The challenge of employee resignation remains a prominent issue affecting both the public and private sectors, marked by its unpredictable and uncontrollable nature. Consequently, it is imperative for every organization to establish a comprehensive strategy to consistently address this matter.'

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
        <TextoObra  texto={texto}/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
