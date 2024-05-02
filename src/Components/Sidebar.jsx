import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav class="wrapper">
      <div class="mainMenu">
        <li class="item" id="proyectos">
          <a href="#proyectos" class="btn">
            <i>PROYECTOS</i>
          </a>
          <div class="subMenu">
            <a href="fantasia">El mundo de la fantasía, patrimonio de la humanidad</a>
            <a href="#lineas">Algunas lineas no existen</a>
            <a href="#tu-recuerdo">Todo lo que tu recuerdo me trajo</a>
          </div>
        </li>
        <li class="item" id="bio">
          <a href="bio" class="btn">
            <i>BIO</i>
          </a>
        </li>
        <li class="item" id="statement">
          <a href="#statement" class="btn">
            <i>STATEMENT</i>
          </a>
        </li>
        <li class="item">
          <a href="#contacto" class="btn">
            <i>CONTACTO</i>
          </a>
        </li>
      </div>
    </nav>
  );
};

export default Sidebar;
