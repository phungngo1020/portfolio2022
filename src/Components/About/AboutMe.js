import React from "react";

import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";

import GithubLogo from '../../Assets/github_logo.png';
import GmailLogo from '../../Assets/gmail_logo.png';
import LinkedinLogo from '../../Assets/linkedin_logo.png';
import AboutMeHeader from "../../Assets/aboutme_header.svg";

export default function AboutMe() {
  return (
    <Fade bottom>
      <div
        className="aboutme-container bg-primary"
        style={{ width: "100vw", padding: "100px 0 100px 0" }}
      >
        <Fade right>
          <div style={{ width: "100%", display: "flex" }}>
            {/* <h2>ABOUT ME</h2> */}
            <div style={{ display: "flex", position: "absolute" }}>
              <img
                src={AboutMeHeader}
                height="82"
                style={{ marginLeft: "3rem" }}
                className="hvr-wobble-top"
              />
              <div
                style={{
                  width: "50vw",
                  borderBottom: "5px dashed #707070",
                  height: "60px",
                  zIndex: 3,
                }}
              ></div>
            </div>
          </div>
        </Fade>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "3rem",
          }}
        >
          <div className="about-card" style={{ padding: "7rem 5rem" }}>
            <h4>I’M A UX ENGINEER/FRONT END DEVELOPER.</h4>
            <h4>I DESIGN AND DEVELOP MODERN WEB APPLICATIONS.</h4>

            <h4 style={{ marginTop: "2rem" }}>PHUNGNGO1020@GMAIL.COM</h4>

            <RubberBand bottom cascade>
            <div style={{ height: "20%", width: "100%", marginTop: "1rem" }}>
              <img
                src={GithubLogo}
                className="logo"
                width="35px"
              />
              <img
                src={GmailLogo}
                className="logo"
                width="35px"
                style={{ marginLeft: "10px" }}
              />
              <img
                src={LinkedinLogo}
                className="logo"
                width="35px"
                style={{ marginLeft: "10px" }}
              />
            </div>
            </RubberBand>
          </div>
        </div>
      </div>
    </Fade>
  );
}
