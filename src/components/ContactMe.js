
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "motion/react";

function ContactMe() {

  return (
    <section className="socials" id="contact">
      <div className="container">
        <div className="content">
          <div className="section-heading center">
            <h6>Get In Touch</h6>
            <motion.h3
              initial={{y: 25, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.5, ease: "easeInOut"}}
              viewport={{once: true, margin: "-500px 0px"}}
            >
              Reach <span>Me</span>
            </motion.h3>
            <p>
              Send a message, connect with me. I would like to collaborate!
            </p>
          </div>
        </div>
        <div className="contact-columns">
          <motion.div 
            className="row flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: {  ease: "easeInOut", duration: 0.8, delay: 0.8 } }}
            exit={{ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.4}}}
          >
            <a href="mailto:josephadoga85@gmail.com" className="column">
              <div>
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} className='fa-envelope' />
                </div>
                <div className="text">
                  <h4>E-mail</h4>
                  <p>josephadoga85@gmail.com</p>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/josephadoga" className="column" target="_blank" rel="noreferrer">
              <div>
                <div className="icon">
                  <FontAwesomeIcon icon={faLinkedin} className='fa-linkedin' />
                </div>
                <div className="text">
                  <h4>LinkedIn</h4>
                  <p>Joseph Adoga</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;