import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Navigation() {

    return (
        <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end" }}>
            <div className="nav-bar" style={{ position: "fixed", top: 0, marginTop: "50px", zIndex: "2" }}>
                <Bounce right cascade>
                    <ul style={{ height: "150px", textAlign: "right" }}>
                        <li className="nav-item">
                            <h3>HOME</h3>
                            <div className="active"></div>
                        </li>
                        <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                            <h3>ABOUT</h3>
                            <div className="inactive"></div>
                        </li>
                        <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                            <h3>PROJECTS</h3>
                            <div className="inactive"></div>
                        </li>
                        <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                            <h3>DESIGNS/ARTS</h3>
                            <div className="inactive"></div>
                        </li>
                    </ul>
                </Bounce>

            </div>
        </div>
    )
}
