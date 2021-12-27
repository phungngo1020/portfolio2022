import React, { useState } from 'react';

import GithubLogo from '../../Assets/github_logo.png';
import GmailLogo from '../../Assets/gmail_logo.png';
import LinkedinLogo from '../../Assets/linkedin_logo.png';
import HeaderText from '../../Assets/header_text.svg';

import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';



export default function Home() {

    const [bgColor, setBgColor] = useState("yellow");

    function updateColor(color) {

    }

    return (
        <div className="home-container" id="home">
            <Jump cascade>
                <div style={{ height: "20%", width: "100%", marginTop: "16px", display: "flex" }}>

                    <a href="https://github.com/phungngo1020" target="_blank">
                        <img src={GithubLogo} className="logo" width="35px" style={{ marginLeft: "16px" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/phung-ngo-65610a15b/" target="_blank">
                        <img src={LinkedinLogo} className="logo" width="35px" style={{ marginLeft: "10px" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/phung-ngo-65610a15b/" target="_blank">
                        <img src={GmailLogo} className="logo" width="35px" style={{ marginLeft: "10px" }} />
                    </a>
                    {/* <div style={{display: "flex" , alignItems: "center"}}> */}
                        <p>phungngo1020@gmail.com</p>
                    {/* </div> */}

                </div>
            </Jump>

            <div className="home-cards-container" style={{ height: "80%", width: "100%" }}>
                <div className="card card-bottom" onClick={(e) => updateColor("grey")}></div>
                <div className="card card-middle" onClick={(e) => updateColor("grey")}></div>
                <div className="card card-top" onClick={(e) => updateColor("grey")}></div>

                <div className="header-container" style={{ height: "80%" }}>
                    <Bounce bottom cascade>
                        <h2>PHUNG NGO</h2>
                    </Bounce>
                    {/* <h1>UX/FRONT END DEVELOPER</h1> */}
                    <Bounce bottom cascade>
                        <img src={HeaderText} />
                    </Bounce>
                </div>
            </div>
        </div>
    )
}
