import Sidebar from "../Components/Sidebar";

import "./Home.css";

const Entrevistas = () => {
  const F2024_1 = process.env.PUBLIC_URL + "/Multimedia/Notas/2024-1.jpg";
  const F2023_1 = process.env.PUBLIC_URL + "/Multimedia/Notas/2023-1.png";
  const F2023_2 = process.env.PUBLIC_URL + "/Multimedia/Notas/2023-2.png";
  const F2023_3 = process.env.PUBLIC_URL + "/Multimedia/Notas/2023-3.png";
  const F2023_4 = process.env.PUBLIC_URL + "/Multimedia/Notas/2023-4.png";
  const F2023_5 = process.env.PUBLIC_URL + "/Multimedia/Notas/2023-5.jpg";
  const F2023_6 = process.env.PUBLIC_URL + "/Multimedia/Notas/2023-6.jpg";
  const F2022_1 = process.env.PUBLIC_URL + "/Multimedia/Notas/2022-1.jpg";
  const F2022_2 = process.env.PUBLIC_URL + "/Multimedia/Notas/2022-2.jpg";
  const F2022_3 = process.env.PUBLIC_URL + "/Multimedia/Notas/2022-3.jpg";
  const F2022_4 = process.env.PUBLIC_URL + "/Multimedia/Notas/2022-4.jpg";
  const F2021_1 = process.env.PUBLIC_URL + "/Multimedia/Notas/2021-1.png";
  const F2021_2 = process.env.PUBLIC_URL + "/Multimedia/Notas/2021-2.jpg";
  const F2021_3 = process.env.PUBLIC_URL + "/Multimedia/Notas/2021-3.jpg";
  const F2020_1 = process.env.PUBLIC_URL + "/Multimedia/Notas/2020-1.jpg";
  const F2019_1 = process.env.PUBLIC_URL + "/Multimedia/Notas/2019-1.jpg";

  return(
    <div className='principal'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className="content">
        <h2><u>Entrevistas | Notas</u></h2>
        <br/>
        <h4><u>PROXIMAMENTE</u></h4>
        <img src={F2024_1} alt=""/>
        <br/>
        <h4><u>2023</u></h4>
        <br/>
        <img src={F2023_1} alt=""/>
        <br/>
        <img src={F2023_2} alt=""/>
        <br/>
        <img src={F2023_3} alt=""/>
        <br/>
        <img src={F2023_4} alt=""/>
        <br/>
        <img src={F2023_5} alt=""/>
        <br/>
        <img src={F2023_6} alt=""/>
        <br/>
        <h4><u>2022</u></h4>
        <br/>
        <img src={F2022_1} alt=""/>
        <br/>
        <img src={F2022_2} alt=""/>
        <br/>
        <img src={F2022_3} alt=""/>
        <br/>
        <img src={F2022_4} alt=""/>
        <br/>
        <h4><u>2021</u></h4>
        <br/>
        <img src={F2021_1} alt=""/>
        <br/>
        <img src={F2021_2} alt=""/>
        <br/>
        <img src={F2021_3} alt=""/>
        <br/>
        <h4><u>2020</u></h4>
        <br/>
        <img src={F2020_1} alt=""/>
        <br/>
        <h4><u>2019</u></h4>
        <br/>
        <img src={F2019_1} alt=""/>
      </div>
    </div>
  )
};

export default Entrevistas;