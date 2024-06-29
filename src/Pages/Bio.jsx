import Sidebar from '../Components/Sidebar';
import MyPdfViewer from "../Components/PdfRender";

import "./Home.css";
import "./Bio.css";

const Bio = () => {
    const filePath = process.env.PUBLIC_URL + '/CVSolQuirincich.pdf';

    return(
        <div>
            <div className='principal'>
                <div className='sidebar'>
                <Sidebar />
                </div>
                <div className="content">
                    <div>
                        <h4><u>BIO</u></h4>
                        <h4>(Villa Constitución, 1992) </h4>
                        <p>Licenciada y Profesora en Bellas Artes por la UNR.  </p>
                        <p>Su práctica propone un acercamiento a la obra de artistas de la región santafesina, revisitando sus producciones, palabras, vidas e imaginarios; con los cuales entabla un diálogo personal e íntimo, que inscribe su obra en una genealogía particular de territorios, historias y estéticas.</p>
                        <p>Realizó clínica de obra con Georgina Ricci y Lila Siegrist y ha sido seleccionada para participar de las residencias entre ellas CURADORA (Rincón), MANTA (San Martin de los Andes), CHAPACHAPA (Mar del Plata), EL PASAJE (Tucumán).</p>
                        <p>Ha recibido premios y becas entre ellas: Premio Adquisición de la Fundación Castagnino en el 76 Salón Nacional de Rosario (2023); 2do Premio Adquisición en el 13”Premio Itau Artes Visuales (2022); Beca Creación FNA (2023-2018); Beca Entre Todos MR (2019).</p>
                        <p>Participó en varias exposiciones individuales y colectivas, entre ellas: Salón Nacional de Rosario n°76 (2023), Concurso Nacional del FNA (2022), 17° Premio Nacional UADE(2022),13° Premio Itaú (2022), Colección de arte Amalita Lacroze de Fortabat (2022), Salón Nacional del Museo Rosa Galisteo (2021), 12° Premio Itaú (2021), MUNAR (Bs. As 2020) y Salón Nacional de Rosario (2015). Sus obras forman parte de diferentes colecciones públicas y privadas.</p>
                        <p>Vive y trabaja en Rosario.</p>
                    </div>
                    <div>
                    <br/>
                    <h4><u>CV</u></h4>
                    <br/>
                    <MyPdfViewer urlPdf={filePath}/>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Bio;