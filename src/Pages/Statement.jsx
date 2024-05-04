import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from '../Components/Sidebar';
import "./Home.css";

const Statement = () => {
    return (
        <div>
            <div className='principal'>
                <div className='sidebar'>
                <Sidebar />
                </div>
                <div className="content">
                    <Header/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
};

export default Statement;