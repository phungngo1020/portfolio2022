import Navigation from './Navigation';

import ArtIcon from '../assets/Home/art.png';
import PHUNG from '../assets/Home/PHUNG.svg';
import NGO from '../assets/Home/NGO.svg';
import FrontEnd from '../assets/Home/Front-End.svg';
import UXDesigner from '../assets/Home/UX-Designer.svg';
import SmileIcon from '../assets/Home/happy.png';
import ScrollDown from '../assets/Home/scroll-down-icon.png';
import Vertical1 from '../assets/Home/vertical-1.svg';
import Vertical2 from '../assets/Home/vertical-2.svg';
import Vertical3 from '../assets/Home/vertical-3.svg';
import SmileIcon2 from '../assets/Home/happiness.png';
import AboutMe from '../assets/Home/about-me.svg';
import Technologies from '../assets/Home/technologies.svg';
import DataWave from '../assets/Home/data-wave.png';
import TechnologyList from '../assets/Home/technology-list.svg';
import ContactsIcon from '../assets/Home/send.png';
import Abstract1 from '../assets/Home/abstract-1.png';
import Abstract2 from '../assets/Home/abstract-2.png';
import Abstract3 from '../assets/Home/abstract-3.png';
import Abstract4 from '../assets/Home/abstract-4.png';
import Abstract5 from '../assets/Home/abstract-5.png';
import Abstract6 from '../assets/Home/abstract-6.png';
import PinkBlob from '../assets/Projects/pink-oval.png';
import Contacts from '../assets/Home/Contacts.svg';
import Linkedin from '../assets/Home/Linkedin.svg';
import Email from '../assets/Home/Email.svg';

const Home = () => {
    return (
        <div className="home-wrapper">
            <Navigation />

            <div className="header">
                <div className="header-content">
                    <div className="header-top">
                        <img src={ArtIcon} alt="" width="28" />
                        <img src={PHUNG} className="ml-2" alt="Phung" id="h1"/>
                        <img src={NGO} className="mr-2" alt="Ngo" id="h1"/>
                        <img src={SmileIcon} alt="" width="28"/>
                    </div>
                    <div className="header-bottom">
                        <img src={FrontEnd} height="40" className="mt-2" alt="Front-End Developer" id="h3"/>
                        <img src={UXDesigner} height="40" className="mt-2" alt="And UX Designer" id="h3"/>
                    </div>
                </div>

                <div className="header-nav">
                    <img src={ScrollDown} alt="" width="138" className="scroll-down" />
                </div>

                <img src={Abstract1} alt="" height="40" width="40" id="abstractRight" />
            </div>
            
            <div>
                <img src={Vertical1} alt="" height="360" className="mt-2" />
                <img src={Abstract2} alt="" height="40" width="40" id="abstractLeft" />
            </div>

            <div className="about-wrapper">
                <div className="about">
                    <img src={SmileIcon2} alt="" width="35" />
                    <img src={AboutMe} alt="About Me" height="70" className="mt-1"  id="h2"/>
                    <p>
                        My name is Phung Ngo.<br />
                        I&apos;m a UX Designer and Front-End Developer.<br />
                        I design/build modern and intuitive web applications to help improve the lives of others.
                    </p>
                </div>
            </div>
            <div>
                <img src={Abstract3} alt="" height="40" width="40" id="abstractRight" />
                <img src={Vertical2} alt="" id="vertical2"/>
            </div>

            <div className="technologies-wrapper">
                <img src={DataWave} alt="" height="40"/>
                <img src={Technologies} alt="Technologies" height="70" className="mt-2 mb-2" id="h2"/>
                <img src={TechnologyList} alt="HTML, CSS, JavaScript, React, Angular, Rest APIs, Git, Adobe XD, Figma" width="40%"/>
                <img src={Abstract4} alt="" height="40" width="40" id="abstractLeft" />
            </div>

            <div>
                {/* <img src={Vertical3} alt="" id="vertical3"/> */}
                <img src={Abstract5} alt="" height="40" width="40" id="abstractRight" />
            </div>

            <div className="contacts-wrapper" id="Contacts">
                <img src={Vertical3} alt="" id="vertical3"/>
                <img src={PinkBlob} alt="" width="55%" id="contacts-bg"/>
                <div className="contacts">
                    <img src={ContactsIcon} alt="" width="40" id="" className="mt-2"/>
                    <img src={Contacts} alt="Contacts" height="70" className="mt-2"  id="h2"/>
                    <a href="https://www.linkedin.com/in/phung-ngo-65610a15b/" target="_blank">
                        <img src={Linkedin} alt="LinkedIn" height="30" className="mt-2" id="h3"/>
                    </a>
                    <img src={Email} alt="phungngo1020@gmail.com" height="30" className="mt-1" id="h3"/>
                </div>
                <img src={Abstract6} alt="" height="40" width="40" id="abstractLeft2" />
            </div>

            <footer className="footer">
                <p>Designed and built by <span className="text-primary">Phung Ngo</span></p>
            </footer>
        </div>
    )
}

export default Home;