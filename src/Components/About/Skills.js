import React from "react";

import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";

import SkillsHeader from "../../Assets/skills_header.svg";
import AngularText from "../../Assets/Skills/angular.svg";
import ReactText from "../../Assets/Skills/react.svg";
import NodeJSText from "../../Assets/Skills/nodejs.svg";
import SQLText from "../../Assets/Skills/sql.svg";
import CText from "../../Assets/Skills/c.svg";
import DynamoDBText from "../../Assets/Skills/dynamodb.svg";
import GitText from "../../Assets/Skills/git.svg";
import AdobeXDText from "../../Assets/Skills/adobexd.svg";
import SassText from "../../Assets/Skills/sass.svg";
import BootstrapText from "../../Assets/Skills/bootstrap.svg";
import JavaText from "../../Assets/Skills/java.svg";

export default function Skills() {
  return (
    <Fade bottom>
      <div
        className="skills-container"
        style={{ width: "100vw", marginTop: "2rem" }}
      >
        <Fade left>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: "70vw",
                borderTop: "5px dashed #707070",
                height: "60px",
                zIndex: 3,
              }}
            ></div>

            <img src={SkillsHeader} height="82" className="hvr-wobble-bottom" />
          </div>
        </Fade>

        <div className="skills-list">
          <RubberBand bottom cascade>
            <div style={{ display: "flex" }}>
              <img src={ReactText} className="skill-text" />
              <img src={AngularText} className="skill-text" />
              <img src={NodeJSText} className="skill-text" />
              <img src={SQLText} className="skill-text" />
              <img src={CText} className="skill-text" />
            </div>
          </RubberBand>

          <RubberBand bottom cascade>
            <div>
              <img src={DynamoDBText} className="skill-text" />
              <img src={GitText} className="skill-text" />
            </div>
          </RubberBand>

          <RubberBand bottom cascade>
            <div>
              <img src={AdobeXDText} className="skill-text" />
              <img src={SassText} className="skill-text" />
              <img src={BootstrapText} className="skill-text" />
              <img src={JavaText} className="skill-text" />
            </div>
          </RubberBand>
        </div>
      </div>
    </Fade>
  );
}
