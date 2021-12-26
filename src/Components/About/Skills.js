import React from 'react';
import Fade from 'react-reveal/Fade';

import SkillsHeader from '../../Assets/skills_header.svg';

export default function Skills() {

    return (
        <Fade bottom>
            <div className="skills-container" style={{ width: "100vw", height: "30vh" }}>
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                    {/* <h2>ABOUT ME</h2> */}
                    <Fade right>
                        <img src={SkillsHeader} height="82" />
                    </Fade>
                </div>
            </div>
        </Fade>
    )
}
