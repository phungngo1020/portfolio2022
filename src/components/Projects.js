import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import RocketIcon from '../assets/Projects/rocket.png';
import SideProjects from '../assets/Projects/SideProjects.svg';
import PatternIcon from '../assets/Projects/pattern.png';
import PomodoroTimer from '../assets/Projects/PomodoroTimer.svg';
import CovidTracker from '../assets/Projects/CovidTracker.svg';
import TemplatesShop from '../assets/Projects/TemplatesShop.svg';
import GhibliFilms from '../assets/Projects/GhibliFilms.svg';
import ChatApp from '../assets/Projects/ChatApp.svg';
import Visit from '../assets/Projects/Visit.svg';
import Proj1of5 from '../assets/Projects/1-5.svg';
import Proj2of5 from '../assets/Projects/2-5.svg';
import Proj3of5 from '../assets/Projects/3-5.svg';
import Proj4of5 from '../assets/Projects/4-5.svg';
import Proj5of5 from '../assets/Projects/5-5.svg';
import Abstract1 from '../assets/Home/abstract-1.png';
import Abstract2 from '../assets/Home/abstract-2.png';
import Abstract3 from '../assets/Home/abstract-3.png';
import Abstract4 from '../assets/Home/abstract-4.png';
import Abstract5 from '../assets/Home/abstract-5.png';
import Abstract6 from '../assets/Home/abstract-6.png';

const Projects = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="projects-wrapper">
            <Navigation />
            <div className="projects-header">
                <img src={RocketIcon} width="35" alt="" />
                <img src={SideProjects} alt="" className="mt-2" id="h2"/>
            </div>
            <div>
            <img src={Abstract1} alt="" height="35" width="35" id="abstractRight" />
            </div>
            <img src={PatternIcon} width="35" alt="" id="pattern" />

            {/* https://phungngo1020.github.io/Pomodoro-Timer/ */}
            <div className="project-wrapper-r">
                <div className="project-content">
                    <div className="project-preview preview-1">
                    </div>
                    <div className="project-summary">
                        <img src={Proj1of5} alt="1 out of 5"  id="proj-num"/>
                        <img src={PomodoroTimer} alt="" height="50" className="mt-2 mb-1" id="h3"/>
                        <p>
                            A timer that can be utilized for the Pomodoro studying technique.
                        </p>
                        <p>HTML | CSS | JavaScript | ES6</p>
                        <a href="https://phungngo1020.github.io/Pomodoro-Timer/" target="_blank" rel="noreferrer" className="project-link">
                            <img src={Visit} height="25" alt="Visit" id="visit"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-divider">
                <img src={PatternIcon} width="35" alt="" id="divider"/>
                <img src={Abstract2} alt="" height="35" width="35" id="abstractLeft" />
            </div>
            
            {/* https://pn-chat-app.herokuapp.com/ */}
            <div className="project-wrapper-l">
                <div className="project-content">
                    <div className="project-summary-l">
                        <img src={Proj2of5} alt="2 out of 5"  id="proj-num"/>
                        <img src={ChatApp} alt="" height="50" className="mt-2 mb-1" id="h3"/>
                        <p>
                            A Node.js chat application where users can enter chat rooms.
                        </p>
                        <p>Node.js | Web Socket | HTML | CSS | Git</p>
                        <a href="https://pn-chat-app.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                            <img src={Visit} height="25" alt="Visit" id="visit"/>
                        </a>
                    </div>
                    <div className="project-preview preview-2">
                    </div>
                </div>
            </div>

            <div className="project-divider">
                <img src={Abstract3} alt="" height="35" width="35" id="abstractRight" />
                <img src={PatternIcon} width="35" alt="" id="divider"/>
            </div>

            {/* https://covid-data-tracker.herokuapp.com/ */}
            <div className="project-wrapper-r">
                <div className="project-content">
                    <div className="project-preview preview-5">
                    </div>
                    <div className="project-summary">
                        <img src={Proj3of5} alt="3 out of 5"  id="proj-num"/>
                        <img src={CovidTracker} alt="" height="50" className="mt-2 mb-1" id="h3"/>
                        <p>
                            A React application that displays live COVID-19 data and compare countrires' data.
                        </p>
                        <p>React | Material UI | Charts.js | HTML | CSS | REST APIs | Git</p>
                        <a href="https://covid-data-tracker.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                            <img src={Visit} height="25" alt="Visit"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-divider">
                <img src={Abstract4} alt="" height="35" width="35" id="abstractLeft" />
                <img src={PatternIcon} width="35" alt="" id="divider"/>
            </div>
            
            {/* http://www.ghibli-films.com.s3-website-us-east-1.amazonaws.com/ */}
            <div className="project-wrapper-l">
                <div className="project-content">
                    <div className="project-summary-l">
                        <img src={Proj4of5} alt="4 out of 5"  id="proj-num"/>
                        <img src={GhibliFilms} alt="" height="50" className="mt-2 mb-1" id="h3"/>
                        <p>
                            A website where users can search and see Ghibli films summary.
                        </p>
                        <p>HTML | CSS | JavaScript | Studio Ghibli API | JSON</p>
                        <a href="http://www.ghibli-films.com.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noreferrer" className="project-link">
                            <img src={Visit} height="25" alt="Visit"/>
                        </a>
                    </div>
                    <div className="project-preview preview-4">
                    </div>
                </div>
            </div>

            <div className="project-divider">
                <img src={Abstract5} alt="" height="35" width="35" id="abstractRight" />
                <img src={PatternIcon} width="35" alt="" id="divider"/>
            </div>

            {/* https://pn-template-shop.herokuapp.com/ */}
            <div className="project-wrapper-r">
                <div className="project-content">
                    <div className="project-preview preview-3">
                    </div>
                    <div className="project-summary">
                        <img src={Proj5of5} alt="5 out of 5"  id="proj-num"/>
                        <img src={TemplatesShop} alt="" height="50" className="mt-2 mb-1" id="h3"/>
                        <p>
                            A simple e-commerce website where users can purchase website templates.
                        </p>
                        <p>Node.js | Express | MongoDB | Stripe | Pagination | Git</p>
                        <a href="https://pn-template-shop.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                            <img src={Visit} height="25" alt="Visit"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-divider">
                <img src={Abstract6} alt="" height="35" width="35" id="abstractLeft" />
                <img src={PatternIcon} width="35" alt="" id="divider"/>
            </div>

        </div>
    )
}

export default Projects;