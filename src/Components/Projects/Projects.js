import React from 'react';

import Fade from 'react-reveal/Fade';

import ProjectsHeader from '../../Assets/projects_header.svg';

export default function Projects() {

    return (

        <div className="bg-primary projects-container">
            <Fade bottom>
                <div style={{ width: "100%", display: "flex" }}>
                    {/* <h2>ABOUT ME</h2> */}
                    <img src={ProjectsHeader} height="82" />
                </div>
            </Fade>


            <div style={{ borderLeft: "5px dashed #707070", paddingLeft: "2rem" }}>
                <Fade right>
                    <div className="project-container">
                        <h2>2021</h2>
                        <div className="project-info"></div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="project-container">
                        <h2>2021</h2>
                        <div className="project-info"></div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="project-container">
                        <h2>2020</h2>
                        <div className="project-info"></div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="project-container">
                        <h2>2020</h2>
                        <div className="project-info"></div>
                    </div>
                </Fade>
            </div>

        </div>

    )
}
