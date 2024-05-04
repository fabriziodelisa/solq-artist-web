import { useRef, useState } from "react";
import "./Sidebar.css";


const Sidebar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const subMenuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = (e) => {
    if (subMenuRef.current && !subMenuRef.current.contains(e.relatedTarget)) {
      setIsMenuOpen(false);
    }
  };
  return (
    <nav class="wrapper">
      <div class="mainMenu">
        <li class="item" id="proyectos">
        <a href="proyectos" className="btn" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <i>PROYECTOS</i>
          </a>
          <div
            ref={subMenuRef}
            className={`subMenu ${isMenuOpen ? "open" : ""}`}
          >
            <a href="conviccion">Esa Convicción Interior, Invencible</a>
            {/* <a href="#lineas">Algunas lineas no existen</a>
            <a href="#tu-recuerdo">Todo lo que tu recuerdo me trajo</a> */}
          </div>
        </li>
        <li class="item" id="bio">
          <a href="biografia" class="btn">
            <i>BIO</i>
          </a>
        </li>
        {/* <li class="item" id="statement">
          <a href="statement" class="btn">
            <i>STATEMENT</i>
          </a>
        </li> */}
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
