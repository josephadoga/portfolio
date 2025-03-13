
import { motion } from "motion/react";

function AboutMe() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: {  ease: "easeInOut", duration: 0.8, delay: 0.8 } }}
        exit={{ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.4}}}
        viewport={{once: true}}
      >
        <section className="about" id="about">
          <div className="container">
            <div className="who flex gap-15">
              <article>
                <h6>About me</h6>
                <h3>My Profile</h3>
                <motion.p
                  initial={{y: 25, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 2, ease: "easeInOut", delay: "2"}}
                  viewport={{once: true, margin: "-500px 0px"}}
                >
                  I am a dedicated Software Developer with a strong focus 
                  on front-end and back-end development. My technical 
                  expertise spans across various programming languages, 
                  including Python, JavaScript, HTML, and CSS, where I have 
                  successfully executed numerous projects, with React.js, 
                  Arduino, ASP.NET amongst others. My experience also 
                  extends into data analysis, where I am proficient in 
                  tools such as SQL, ASP.NET, Excel, Access and PowerPoint 
                  for Pitch deck.
                </motion.p>
                <p className="skills-heading">My Skills and Expertise</p>
                <div className="skills-content flex space-between">
                  <div className="stack-one">
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>C, C++</li>
                      <li>Python</li>
                    </ul>
                  </div>
                  <div className="stack-two">
                    <ul>
                      <li>ASP.NET MVC, C#</li>
                      <li>React.JS</li>
                      <li>SQL</li>
                      <li>Git, GitHub</li>
                      <li>Visual Studio</li>
                    </ul>
                  </div>
                </div>
                <div className="button flex">
                  <a href="#skills" className="primary-icon-btn">Learn More</a>
                </div>
              </article>
              <aside>
                <div className="profile-pic"></div>
              </aside>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default AboutMe;