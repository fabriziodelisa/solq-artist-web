import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div class="wrapper">
      <ui class="mainMenu">
        <li class="item" id="account">
          <a href="#account" class="btn">
            <i class="fas fa-user-circle"></i>PROYECTOS
          </a>
          <div class="subMenu">
            <a href="">El mundo de la fantasía, patrimonio de la humanidad</a>
            <a href="">Algunas lineas no existen</a>
            <a href="">Todo lo que tu recuerdo me trajo</a>
          </div>
        </li>
        <li class="item" id="about">
          <a href="#about" class="btn">
            <i class="fas fa-address-card"></i>BIO
          </a>
        </li>
        <li class="item" id="support">
          <a href="#support" class="btn">
            <i class="fas fa-info"></i>STATEMENT
          </a>
        </li>
        <li class="item">
          <a href="#" class="btn">
            <i class="fas fa-sign-out-alt"></i>CONTACTO
          </a>
        </li>
      </ui>
    </div>
  );
};

export default Sidebar;
