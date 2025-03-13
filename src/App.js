import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

import landingBgVideo from "./media/night-sky.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



function App() {
  let title = 'Joseph A.';

  const links = [
    {
      id: 0,
      url: '#about',
      name: 'About me'
    },

    {
      id: 1,
      url: '#contact',
      name: 'Contact me'
    },

    {
      id: 2,
      url: '#projects',
      name: 'Projects'
    }
  ]

  return (
    <>
      <div className="landing-page" id="top">
        <div className="video-background">
          <video autoPlay muted loop playsInline className="video">
            <source src={landingBgVideo} type="video/mp4" />
          </video>
          <Header title={title} links={links} />
          <Landing />
        </div>
      </div>
      <main>
        <AboutMe />
        <Skills />
        <Portfolio />
        <ContactMe />
      </main>
      <div className="back-to-top-box primary-icon-btn center">
        <a href="#top">
          <FontAwesomeIcon icon={faArrowUp} className="fa-arrow-up" />
        </a>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
