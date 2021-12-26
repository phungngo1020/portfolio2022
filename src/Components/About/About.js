import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';

export default function About() {

    return (
        <div className="d-flex flex-column" style={{width: "100vw"}}>
            <AboutMe />
            {/* <AboutMe /> */}
            <Skills />
        </div>
    )
}
