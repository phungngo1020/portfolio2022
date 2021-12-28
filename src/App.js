import { useState, useEffect } from "react";
import "./App.css";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";

import Navigation from "./Components/Navigation/Navigation";
import Home from ".//Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import DesignsArts from "./Components/DesignsArts/DesignsArts";

import L from "./Assets/Loading/L.svg";
import O from "./Assets/Loading/O.svg";
import A from "./Assets/Loading/A.svg";
import D from "./Assets/Loading/D.svg";
import I from "./Assets/Loading/I.svg";
import N from "./Assets/Loading/N.svg";
import G from "./Assets/Loading/G.svg";
import Footer from "./Assets/footer.svg";
import Name from "./Assets/name.svg";
import MenuIcon from "./Assets/menu_icon.svg";
import CloseIcon from "./Assets/close_icon.svg";

import GithubLogo from "./Assets/github_logo.png";
import GmailLogo from "./Assets/gmail_logo.png";
import LinkedinLogo from "./Assets/linkedin_logo.png";
import HeaderText from "./Assets/header_text.svg";

function App() {
  const [activeSection, SetActiveSection] = useState("Home");

  const [isLoading, setIsLoading] = useState(true);

  const [bgColor, setBgColor] = useState("App-yellow");

  const [showMenu, setShowMenu] = useState(false);

  function updateColor(color) {
    console.log("bg = " + color);
    setBgColor(color);
  }

  function loading() {
    console.log("done");
    setIsLoading(false);
  }

  useEffect(() => {
    var width = window.innerWidth;
    console.log("width = " + width);

    console.log("loading...");
    setTimeout(loading, 2500);
  });

  let yOffset = window.pageYOffset;
  window.onscroll = function () {
    var pageHeight = document.documentElement.offsetHeight,
      windowHeight = window.innerHeight,
      scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);

    yOffset = window.pageYOffset + windowHeight * 0.5;
    //  console.log("y offset = " + yOffset);
    //  console.log("windowHeight = " + windowHeight);
    // console.log("pageHeight = " + pageHeight);

    // about: yOffset >= windowheight
    if (yOffset < windowHeight) {
      SetActiveSection("Home");
    }

    // about: yOffset >= windowheight
    if (yOffset > windowHeight && yOffset < 2 * windowHeight) {
      SetActiveSection("About");
    }

    // projects: yOffset >= 2 * windowheight
    if (yOffset > 2 * windowHeight && yOffset < pageHeight - windowHeight) {
      SetActiveSection("Projects");
    }

    // projects: yOffset >= pageHeight-windowheight
    if (yOffset >= pageHeight - windowHeight * 1.2) {
      SetActiveSection("Arts");
    }
  };

  if (isLoading) {
    return (
      <div style={{ background: "#DBBD8C" }}>
        <div
          className="loading-container"
          style={{ position: "absolute", width: "100vw", height: "100vh" }}
        ></div>

        <div style={{ position: "absolute" }}>
          <RubberBand bottom cascade>
            <div
              id="load"
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={L} />
              <img src={O} />
              <img src={A} />
              <img src={D} />
              <img src={I} />
              <img src={N} />
              <img src={G} />
            </div>
          </RubberBand>
        </div>
      </div>
    );
  }

  return (
    <div
      className="App"
      // className={bgColor}
    >
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "flex-end" }}
      >
        <div
          className="nav-bar full-menu"
          style={{
            position: "fixed",
            top: 0,
            marginTop: "50px",
            zIndex: "2",
          }}
        >
          <Bounce right cascade>
            <ul style={{ height: "150px", textAlign: "right" }}>
              <li className="nav-item">
                <a href="#home">
                  <h3>HOME</h3>
                </a>
                <div
                  className={activeSection == "Home" ? "active" : "inactive"}
                ></div>
              </li>
              <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                <a href="#about">
                  <h3>ABOUT</h3>
                </a>
                <div
                  className={activeSection == "About" ? "active" : "inactive"}
                ></div>
              </li>
              <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                <a href="#projects">
                  <h3>PROJECTS</h3>
                </a>
                <div
                  className={
                    activeSection == "Projects" ? "active" : "inactive"
                  }
                ></div>
              </li>
              <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                <a href="#arts">
                  <h3>DESIGNS/ARTS</h3>
                </a>
                <div
                  className={activeSection == "Arts" ? "active" : "inactive"}
                ></div>
              </li>
            </ul>
          </Bounce>
        </div>

        <div className="menu-toggle">
          {showMenu == true ? (
            <img
              src={CloseIcon}
              width="30"
              height="30"
              onClick={(e) => {
                console.log("show menu");
                setShowMenu(!showMenu);
              }}
              className="menu-logo"
            />
          ) : (
            <img
              src={MenuIcon}
              width="30"
              height="30"
              onClick={(e) => {
                console.log("show menu");
                setShowMenu(!showMenu);
              }}
              className="menu-logo"
            />
          )}
        </div>

        {showMenu == true ? (
          <div
            style={{
              position: "fixed",
              top: 0,
              marginTop: "70px",
              marginRight: "1rem",
              zIndex: "2",
            }}
          >
            <Bounce right cascade>
              <ul style={{ height: "150px", textAlign: "right" }}>
                <li className="nav-item">
                  <a href="#home">
                    <h3>HOME</h3>
                  </a>
                  <div
                    className={activeSection == "Home" ? "active" : "inactive"}
                  ></div>
                </li>
                <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                  <a href="#about">
                    <h3>ABOUT</h3>
                  </a>
                  <div
                    className={activeSection == "About" ? "active" : "inactive"}
                  ></div>
                </li>
                <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                  <a href="#projects">
                    <h3>PROJECTS</h3>
                  </a>
                  <div
                    className={
                      activeSection == "Projects" ? "active" : "inactive"
                    }
                  ></div>
                </li>
                <li className="nav-item" style={{ marginTop: "1.5rem" }}>
                  <a href="#arts">
                    <h3>DESIGNS/ARTS</h3>
                  </a>
                  <div
                    className={activeSection == "Arts" ? "active" : "inactive"}
                  ></div>
                </li>
              </ul>
            </Bounce>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="body-container">
        <Home />
        <About />
        <Projects />
        <DesignsArts />
        <div
          style={{
            margin: "0 0 2rem 2rem",
            alignItems: "center",
          }}
          className="footer-full"
        >
          <img src={Footer} height="35rem" />
          &nbsp;&nbsp;
          <img src={Name} height="35rem" className="hvr-wobble-top" />
        </div>

        <div
          style={{
            margin: "0 2rem 2rem 2rem",
            alignItems: "center",
          }}
          className="footer-mobile"
        >
          <img src={Footer} height="25rem" />
          &nbsp;&nbsp;
          <img src={Name} height="25rem" className="hvr-wobble-top" />
        </div>
      </div>
    </div>
  );
}

export default App;
