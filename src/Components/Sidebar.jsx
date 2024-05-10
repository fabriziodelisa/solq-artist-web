import "./Sidebar.css";


const Sidebar = () => {

  return (
    <nav class="wrapper">
      <div class="mainMenu">
        <li class="item" id="proyectos">
          <a href="home" id="proyectos" className="btn">
            <i>PROYECTOS</i>
          </a>
          <div className="subMenu">
            <a href="conviccion">Esa Convicción Interior, Invencible</a>
            <a href="artista-interior">Artista del Interior</a>
            <a href="tu-recuerdo">Todo lo que tu recuerdo me trajo</a>
          </div>
        </li>
        <li class="item" id="proyectos">
          <a href="home" id="proyectos" className="btn">
            <i>TALLERES | WORKSHOPS</i>
          </a>
          <div className="subMenu">
            {/* <a href="conviccion">Esa Convicción Interior, Invencible</a> */}
          </div>
        </li>
        <li class="item" id="proyectos">
          <a href="home" id="proyectos" className="btn">
            <i>ENTREVISTAS | NOTAS</i>
          </a>
          <div className="subMenu">
            {/* <a href="conviccion">Esa Convicción Interior, Invencible</a> */}
          </div>
        </li>
        <li class="item" id="bio">
          <a href="biografia" class="btn">
            <i>BIO</i>
          </a>
        </li>
        <li class="item">
          <a href="contacto" class="btn">
            <i>CONTACTO</i>
          </a>
        </li>
      </div>
    </nav>
  );
};

export default Sidebar;
