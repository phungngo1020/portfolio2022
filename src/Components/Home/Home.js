import React, { useState } from "react";

import GithubLogo from "../../Assets/github_logo.png";
import GmailLogo from "../../Assets/gmail_logo.png";
import LinkedinLogo from "../../Assets/linkedin_logo.png";
import HeaderText from "../../Assets/header_text.svg";

import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

export default function Home() {
  const [bgColor, setBgColor] = useState("yellow");

  function updateColor(color) {}

  const [emailHover, setEmailHover] = useState(false);
  const [Copied, setCopied] = useState(false);


  return (
    <div className="home-container" id="home">
      <div
        style={{
          height: "20%",
          width: "100%",
          marginTop: "16px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Jump cascade>
          <div style={{display: "flex"}}>
            <a href="https://github.com/phungngo1020" target="_blank">
              <img
                src={GithubLogo}
                className="logo"
                width="35px"
                style={{ marginLeft: "16px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/phung-ngo-65610a15b/"
              target="_blank"
            >
              <img
                src={LinkedinLogo}
                className="logo"
                width="35px"
                style={{ marginLeft: "10px" }}
              />
            </a>
            <a target="_blank">
              
                  <img
                src={GmailLogo}
                className="logo"
                width="35px"
                style={{ marginLeft: "10px" }}
                onMouseOver={(e) => setEmailHover(true)}
                onMouseOut={(e) => setEmailHover(false)}
                onClick={(e) => {
                    navigator.clipboard.writeText("phungngo1020@gmail.com")
                    setCopied(true);
                    setTimeout(function () {
                        setCopied(false);
                    }, 3000);
                }}
              />
              <div style={{overflow: "hidden"}}>
              {/* <p className="copied-show">Copied!</p> */}
                <p className={Copied ? "copied-show" : "copied-hide"}>Copied!</p>
              </div>
            </a>
          </div>
        </Jump>
        <div style={{height: "35px", display: "flex", alignItems: "center", marginLeft: "0.8rem"}}>
        {/* <p className="email-show">phungngo1020@gmail.com</p> */}
            <p className={emailHover ? "email-show" : "email-hide"}>phungngo1020@gmail.com</p>
        </div>
      </div>

      <div
        className="home-cards-container"
        style={{ height: "80%", width: "100%" }}
      >
        <div
          className="card card-bottom"
          onClick={(e) => updateColor("grey")}
        ></div>
        <div
          className="card card-middle"
          onClick={(e) => updateColor("grey")}
        ></div>
        <div
          className="card card-top"
          onClick={(e) => updateColor("grey")}
        ></div>

        <div className="header-container" style={{ height: "80%" }}>
          <Bounce bottom cascade>
            <h2>PHUNG NGO</h2>
          </Bounce>
          {/* <h1>UX/FRONT END DEVELOPER</h1> */}
          <Bounce bottom cascade>
            <img src={HeaderText} />
          </Bounce>
        </div>
      </div>
    </div>
  );
}
