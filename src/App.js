import { useState, useEffect } from 'react';
import './App.css';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';

import Navigation from './Components/Navigation/Navigation';
import Home from './/Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import DesignsArts from './Components/DesignsArts/DesignsArts';

import L from './Assets/Loading/L.svg';
import O from './Assets/Loading/O.svg';
import A from './Assets/Loading/A.svg';
import D from './Assets/Loading/D.svg';
import I from './Assets/Loading/I.svg';
import N from './Assets/Loading/N.svg';
import G from './Assets/Loading/G.svg';
import Footer from './Assets/footer.svg';

import GithubLogo from './Assets/github_logo.png';
import GmailLogo from './Assets/gmail_logo.png';
import LinkedinLogo from './Assets/linkedin_logo.png';
import HeaderText from './Assets/header_text.svg';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const [bgColor, setBgColor] = useState("App-yellow");

  function updateColor(color) {
    console.log("bg = " + color);
    setBgColor(color);
  }

  function loading() {
    console.log("done")
    setIsLoading(false);
  }

  useEffect(() => {
    console.log("loading...");
    setTimeout(loading, 2500);
  });

  if (isLoading) {
    return (
      <div style={{ background: "#DBBD8C" }}>
        <div className="loading-container" style={{position: "absolute", width: "100vw", height: "100vh" }}>
        </div>

        <div style={{position: "absolute"}}>
          <RubberBand bottom cascade>
            <div id="load" style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
      <Navigation />
      <div className="body-container">
        <Home />
        <About />
        <Projects />
        <DesignsArts />
        <div style={{margin: "0 "}}>
          <img src={Footer} />
        </div>
      </div>
    </div>
  );
}

export default App;
