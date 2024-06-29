import "./Sidebar.css";


const Sidebar = () => {
    return(
    <div>
      <h2>Sol Quirincich</h2>
      <div className="lista">
        <ul>
          <li><a href="home">OBRAS</a></li>
          <li><a href="conviccion">Esa convicción interior, invencible</a></li>
          <li><a href="mundo-fantasia">El mundo de la fantasía, patrimonio de la humanidad</a></li>
          <li><a href="artista-interior">Artista del interior</a></li>
          <li><a href="tu-recuerdo">Todo lo que tu recuerdo me trajo</a></li>
          <li><a href="talleres">TALLERES | WORKSHOPS</a></li>
          <li><a href="entrevistas-notas">ENTREVISTAS | NOTAS</a></li>
          <li><a href="biografia">BIO</a></li>
          <li><a href="contacto">CONTACTO</a></li>
        </ul>
      </div>
    </div>
    )
//  return (
//     <nav class="wrapper">
//       <h2>Sol Quirincich</h2>
//       <div class="mainMenu">
//         <li class="item" id="proyectos">
//           <a href="home" id="proyectos2" className="btn">OBRAS</a>
//           <div className="subMenu">
//             <a href="conviccion">Esa convicción interior, invencible</a>
//             <a href="mundo-fantasia">El mundo de la fantasía, patrimonio de la humanidad</a>
//             <a href="artista-interior">Artista del interior</a>
//             <a href="tu-recuerdo">Todo lo que tu recuerdo me trajo</a>
//           </div>
//         </li>
//         <li class="item" id="talleres">
//           <a href="talleres" id="talleres" className="btn">
//             <i>TALLERES | WORKSHOPS</i>
//           </a>
//         </li>
//         <li class="item" id="entrevistas">
//           <a href="entrevistas-notas" id="entrevistas" className="btn">
//             <i>ENTREVISTAS | NOTAS</i>
//           </a>
//         </li>
//         <li class="item" id="bio">
//           <a href="biografia" class="btn">
//             <i>BIO</i>
//           </a>
//         </li>
//         <li class="item">
//           <a href="contacto" class="btn">
//             <i>CONTACTO</i>
//           </a>
//         </li>
//       </div>
//     </nav>
//   );
};

export default Sidebar;
