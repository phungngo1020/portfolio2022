import React from "react";

import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";

import ProjectsHeader from "../../Assets/projects_header.svg";
import GithubLogo from "../../Assets/github_logo.png";
import LinkLogo from "../../Assets/link_logo.svg";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-primary projects-container"
      style={{ marginTop: "3rem" }}
    >
      <Fade bottom>
        <div style={{ width: "100%", display: "flex" }}>
          {/* <h2>ABOUT ME</h2> */}
          <img
            src={ProjectsHeader}
            height="82"
            style={{ marginLeft: "3rem" }}
          />
        </div>
      </Fade>

      <div style={{ borderLeft: "5px dashed #707070", paddingLeft: "2rem" }}>
        <div className="project-container">
          <Fade left>
            <h2>2021</h2>
          </Fade>
          <Fade right>
            <div className="project-info">
              <div style={{ width: "50%", padding: "2rem" }}>
                <a style={{cursor: "pointer"}}>
                <h2 className="hvr-wobble-top">PORTFOLIO SHOP</h2>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
                {/* <Jello cascade> */}
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <img
                    src={GithubLogo}
                    className="logo hvr-wobble-top"
                    width="35px"
                    height="35px"
                  />
                  <img
                    src={LinkLogo}
                    className="logo hvr-wobble-top"
                    width="35px"
                    height="35px"
                    style={{ marginLeft: "0.5rem" }}
                  />
                </div>
                {/* </Jello> */}
              </div>

              <div
                style={{ width: "50%", height: "100%", background: "#E0C5C5" }}
              ></div>
            </div>
          </Fade>
        </div>

        <div className="project-container">
          <Fade left>
            <h2>2021</h2>
          </Fade>
          <Fade right>
            <div className="project-info">
              <div style={{ width: "50%", padding: "2rem" }}>
                <a style={{cursor: "pointer"}}>
                  <h2 className="hvr-wobble-top">COVID-19 TRACKER</h2>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>

                {/* <Jello cascade> */}
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <img
                    src={GithubLogo}
                    className="logo hvr-wobble-top"
                    width="35px"
                    height="35px"
                  />
                  <img
                    src={LinkLogo}
                    className="logo hvr-wobble-top"
                    width="35px"
                    height="35px"
                    style={{ marginLeft: "0.5rem" }}
                  />
                </div>
                {/* </Jello> */}
              </div>

              <div
                style={{ width: "50%", height: "100%", background: "#E0C5C5" }}
              ></div>
            </div>
          </Fade>
        </div>

        <div className="project-container">
          <Fade left>
            <h2>2020</h2>
          </Fade>
          <Fade right>
            <div className="project-info">
              <div style={{ width: "50%", padding: "2rem" }}>
              <a style={{cursor: "pointer"}}>
                <h2 className="hvr-wobble-top">CHAT APPLICATION</h2>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>

                {/* <Jello cascade> */}
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <img
                    src={GithubLogo}
                    className="logo hvr-wobble-top"
                    width="35px"
                    height="35px"
                  />
                  <img
                    src={LinkLogo}
                    className="logo hvr-wobble-top"
                    width="35px"
                    height="35px"
                    style={{ marginLeft: "0.5rem" }}
                  />
                </div>
                {/* </Jello> */}
              </div>

              <div
                style={{ width: "50%", height: "100%", background: "#E0C5C5" }}
              ></div>
            </div>
          </Fade>
        </div>

        <div className="project-container">
          <Fade left>
            <h2>2020</h2>
          </Fade>
          <Fade right>
            <div className="project-info">
              <div style={{ width: "50%", padding: "2rem" }}>
              <a style={{cursor: "pointer"}}>
                <h2 className="hvr-wobble-top">TRAILFINDER</h2>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <img
                    src={GithubLogo}
                    className="logo hvr-wobble-top"
                    width="35px"
                    height="35px"
                  />
                  <img
                    src={LinkLogo}
                    className="logo hvr-wobble-top"
                    width="35px"
                    height="35px"
                    style={{ marginLeft: "0.5rem" }}
                  />
                </div>
              </div>

              <div
                style={{ width: "50%", height: "100%", background: "#E0C5C5" }}
              ></div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
