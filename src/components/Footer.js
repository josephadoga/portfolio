
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {

  return (
    <div className="container">
      <div className="line"></div>
      <div className="footer-content flex">
        <div className="footer-socials flex">
          <a href="https://www.github.com/josephadoga" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="fa-github footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/josephadoga" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa-linkedin footer-icon" />
          </a>
        </div>
        <div className="copyright">
          <p>Designed by Joseph Adoga © 2025</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;