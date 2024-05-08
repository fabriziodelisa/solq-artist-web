import "./Sidebar.css";


const Sidebar = () => {

  return (
    <nav class="wrapper">
      <div class="mainMenu">
        <li class="item" id="proyectos">
        <a href="conviccion" id="proyectos" className="btn">
            <i>PROYECTOS</i>
          </a>
          <div className="subMenu">
            <a href="conviccion">Esa Convicción Interior, Invencible</a>
            {/* {/* <a href="#lineas">Algunas lineas no existen</a> */}
            <a href="artista-interior">Artista del Interior</a>
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
