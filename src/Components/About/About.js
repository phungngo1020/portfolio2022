import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';

export default function About() {

    return (
        <div id="about" className="d-flex flex-column" style={{width: "100vw", minHeight: "100vh"}}>
            <AboutMe />
            {/* <AboutMe /> */}
            <Skills />
        </div>
    )
}
