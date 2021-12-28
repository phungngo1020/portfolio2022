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
          style={{ width: "100vw", display: "flex", justifyContent: "flex-end" }}
        >
          <img src={ArtsHeader} className=" section-header arts-header"/>
        </div>
      </Fade>

      <Fade bottom>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div
            className="arts-display"
          >
            {activeArt == 1 ? (
              <div
                className="art-container art-1"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}

            {activeArt == 2 ? (
              <div
                className="art-container art-2"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 3 ? (
              <div
                className="art-container art-3"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 4 ? (
              <div
                className="art-container art-4"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 5 ? (
              <div
                className="art-container art-5"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 6 ? (
              <div
                className="art-container art-6"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 7 ? (
              <div
                className="art-container art-7"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 8 ? (
              <div
                className="art-container art-8"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}
            {activeArt == 9 ? (
              <div
                className="art-container art-9"
                style={{ width: "100%", height: "100%" }}
              ></div>
            ) : (
              ""
            )}
          </div>

          <div style={{ marginLeft: "0.5rem" }}>
            <div className="arts-hover">
              <div
                id="artsPage"
                className={activeArt == 1 ? "active" : "inactive"}
                onClick={(e) => setActiveArt(1)}
              ></div>
            </div>
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
            <div
              id="artsPage"
              className={activeArt == 5 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(5)}
            ></div>
            <div
              id="artsPage"
              className={activeArt == 6 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(6)}
            ></div>
            <div
              id="artsPage"
              className={activeArt == 7 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(7)}
            ></div>
            <div
              id="artsPage"
              className={activeArt == 8 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(8)}
            ></div>
            <div
              id="artsPage"
              className={activeArt == 9 ? "active" : "inactive"}
              onClick={(e) => setActiveArt(9)}
            ></div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
