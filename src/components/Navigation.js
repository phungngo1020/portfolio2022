import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Balloons from '../assets/Home/balloons.png';
import Sea from '../assets/Home/sea.png';

const Navigation = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <navigation className="nav-bar">
                <div className="nav-contacts">
                    <img src={Balloons} alt="" id="balloon"/>
                    {/* <a href="#Contacts">CONTACTS</a> */}
                </div>

                <div className="nav-items">
                    <div className="nav-item" id={location.pathname=="/" ? "nav-active" : "nav-inactive"}>
                        <Link to="/" className="nav-link">
                            ABOUT
                        </Link>
                        <img src={Sea} alt="" width="28" id="active-icon"/>
                    </div>
                    <div className="nav-item" id={location.pathname=="/projects" ? "nav-active" : "nav-inactive"}>
                        <Link to="/projects" className="nav-link">
                            PROJECTS
                        </Link>
                        {/* <a href="">PROJECTS</a> */}
                        <img src={Sea} alt="" width="28" id="active-icon"/>
                    </div>
                </div>
            </navigation>
    )
}

export default Navigation;