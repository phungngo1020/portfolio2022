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
                <a style={{ cursor: "pointer" }} href="https://pn-template-shop.herokuapp.com/" target="_blank">
                  <h2 className="hvr-wobble-top">PORTFOLIO SHOP</h2>
                </a>
                <p>
                  An e-commerce website that allows users to purchase portfolio templates.
                </p>
                <p>Node.js | Express | MongoDB | Stripe | Pagination | Heroku | Git</p>
                {/* <Jello cascade> */}
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <a style={{ cursor: "pointer" }} href="https://pn-template-shop.herokuapp.com/" target="_blank">
                    <img
                      src={LinkLogo}
                      className="logo hvr-wobble-top"
                      width="35px"
                      height="35px"
                    />
                  </a>
                </div>
              </div>
              <div
                className="template-shop"
                style={{ width: "50%", height: "100%"}}
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
                <a style={{ cursor: "pointer" }} href="https://covid-data-tracker.herokuapp.com/" target="_blank">
                  <h2 className="hvr-wobble-top">COVID-19 TRACKER</h2>
                </a>
                <p>
                  A React application that allows users to see live COVID-19 data and compare countries' data.
                </p>
                <p>React | Material UI | Charts.js | HTML | CSS | Heroku | Git</p>

                {/* <Jello cascade> */}
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <a style={{ cursor: "pointer" }} href="https://covid-data-tracker.herokuapp.com/" target="_blank">
                    <img
                      src={LinkLogo}
                      className="logo hvr-wobble-top"
                      width="35px"
                      height="35px"
                    />
                  </a>
                </div>
                {/* </Jello> */}
              </div>

              <div
                className="covid-tracker"
                style={{ width: "50%", height: "100%" }}
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
                <a style={{ cursor: "pointer" }} href="https://pn-chat-app.herokuapp.com/" target="_blank">
                  <h2 className="hvr-wobble-top">CHAT APPLICATION</h2>
                </a>
                <p>
                  A Node.js application that allows users to enter a display name and join chat rooms to chat with other users.
                </p>
                <p>Node.js | Web Socket | HTML | CSS | Heroku | Git</p>
                {/* <Jello cascade> */}
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <a style={{ cursor: "pointer" }} href="https://pn-chat-app.herokuapp.com/" target="_blank">
                    <img
                      src={LinkLogo}
                      className="logo hvr-wobble-top"
                      width="35px"
                      height="35px"
                    />
                  </a>
                </div>
                {/* </Jello> */}
              </div>

              <div
                className="chat-app"
                style={{ width: "50%", height: "100%" }}
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
                <a style={{ cursor: "pointer" }} href="https://manny1206.github.io/Trailfinder//" target="_blank">
                  <h2 className="hvr-wobble-top">TRAILFINDER</h2>
                </a>
                <p>
                  A web application that locates bike trails around the address that user input.
                </p>
                <p>Angular | Firebase | Google Maps API | Adobe Illustrator | HTML | CSS</p>
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <a style={{ cursor: "pointer" }} href="https://manny1206.github.io/Trailfinder//" target="_blank">
                    <img
                      src={LinkLogo}
                      className="logo hvr-wobble-top"
                      width="35px"
                      height="35px"
                    />
                  </a>
                </div>
              </div>

              <div
                className="trailfinder"
                style={{ width: "50%", height: "100%" }}
              ></div>
            </div>
          </Fade>
        </div>

        <div className="project-container">
          <Fade left>
            <h2>2019</h2>
          </Fade>
          <Fade right>
            <div className="project-info">
              <div style={{ width: "50%", padding: "2rem" }}>
                <a style={{ cursor: "pointer" }} href="http://www.ghibli-films.com.s3-website-us-east-1.amazonaws.com/" target="_blank">
                  <h2 className="hvr-wobble-top">GHIBLI FILMS</h2>
                </a>
                <p>
                  A web application that fetch and display Studio Ghibli movies info from an API and allows users to search for a movie.
                </p>
                <p>HTML | CSS | JavaScript | Studio Ghibli API | JSON</p>
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <a style={{ cursor: "pointer" }} href="http://www.ghibli-films.com.s3-website-us-east-1.amazonaws.com/" target="_blank">
                    <img
                      src={LinkLogo}
                      className="logo hvr-wobble-top"
                      width="35px"
                      height="35px"
                    />
                  </a>
                </div>
              </div>

              <div
                className="ghibli-films"
                style={{ width: "50%", height: "100%" }}
              ></div>
            </div>
          </Fade>
        </div>

        <div className="project-container">
          <Fade left>
            <h2>2019</h2>
          </Fade>
          <Fade right>
            <div className="project-info">
              <div style={{ width: "50%", padding: "2rem" }}>
                <a style={{ cursor: "pointer" }} href="https://phungngo1020.github.io/Pomodoro-Timer/" target="_blank">
                  <h2 className="hvr-wobble-top">POMODORO TIMER</h2>
                </a>
                <p>
                  A countdown timer that follows the pomodoro technique of repeating a cycle of 25 minutes work and 5 minutes break.
                </p>
                <p>HTML | CSS | JavaScript</p>
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  {/* <a href="https://github.com/phungngo1020/Pomodoro-Timer" target="_blank">
                    <img
                      src={GithubLogo}
                      className="logo hvr-wobble-top"
                      width="35px"
                      height="35px"
                    />
                  </a> */}

                  <a style={{ cursor: "pointer" }} href="https://phungngo1020.github.io/Pomodoro-Timer/" target="_blank">
                    <img
                      src={LinkLogo}
                      className="logo hvr-wobble-top"
                      width="35px"
                      height="35px"
                    />
                  </a>
                </div>
              </div>

              <div
                className="pomodoro-timer"
                style={{ width: "50%", height: "100%" }}
              ></div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
