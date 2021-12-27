import React, { useState } from "react";

import Fade from "react-reveal/Fade";

import ArtsHeader from "../../Assets/arts_header.svg";

export default function AboutMe() {
  let arts = [1, 2, 3, 4, 5];
  const [activeArt, setActiveArt] = useState(1);

  return (
    <div
      id="arts"
      className="arts-container"
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Fade right>
        <div
          style={{ width: "72vw", display: "flex", justifyContent: "right" }}
        >
          <img src={ArtsHeader} style={{ alignSelf: "right" }} />
        </div>
      </Fade>

      <Fade bottom>
        <div style={{ display: "flex" }}>
          <div
            className="arts-display"
            style={{ width: "70vw", height: "40vw", background: "#ffffff" }}
          >
            {activeArt == 1 ? (
              <div
                className="art-container"
                style={{ width: "100%", height: "100%", background: "#E0C5C5" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 2 ? (
              <div
                style={{ width: "100%", height: "100%", background: "#8E8E8E" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 3 ? (
              <div
                style={{ width: "100%", height: "100%", background: "#E3E3E3" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 4 ? (
              <div
                style={{ width: "100%", height: "100%", background: "#FFFFFF" }}
              ></div>
            ) : (
              ""
            )}
          </div>

          <div style={{ marginLeft: "0.5rem" }}>
            <div
              id="artsPage"
              className={activeArt == 1 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(1)}
            ></div>
            <div
              id="artsPage"
              className={activeArt == 2 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(2)}
            ></div>
            <div
              id="artsPage"
              className={activeArt == 3 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(3)}
            ></div>
            <div
              id="artsPage"
              className={activeArt == 4 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(4)}
            ></div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
