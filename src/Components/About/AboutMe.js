import React from 'react';
import Fade from 'react-reveal/Fade';
import AboutMeHeader from '../../Assets/aboutme_header.svg';

export default function AboutMe() {

    return (
        <Fade bottom>
            <div className="aboutme-container bg-primary" style={{ width: "100vw", padding: "100px 0 100px 0" }}>
                <Fade left>
                    <div style={{ width: "100%", display: "flex" }}>
                        {/* <h2>ABOUT ME</h2> */}
                        <img src={AboutMeHeader} height="82" />
                    </div>
                </Fade>

                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginRight: "50px" }}>
                    <div className="about-card"></div>
                </div>
            </div>
        </Fade>
    )
}
