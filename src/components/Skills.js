import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode,  faBarsProgress} from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react";


import htmlLogo from "../media/HTML.svg";
import cssLogo from "../media/CSS.png";
import javascriptLogo from "../media/JavaScript.png";
import reactLogo from "../media/React.js.png";
import aspnetLogo from "../media/asp.net.png";
import mySqlLogo from "../media/MySql.png";
import pythonLogo from "../media/Python.png";
import wordPressLogo from "../media/WordPress.png";
import cSharpLogo from "../media/C#.png";
import gitLogo from "../media/Git.png";
import gitHubLogo from "../media/GitHub.png";
import vsCodeLogo from "../media/vscode.png";
import visualStudioLogo from "../media/Visual-Studio-logo.png";



function Skills() {
  const programIcons = [
    {
      id: 1,
      name: 'html',
      className: 'html-icon skill-icon',
      source: htmlLogo,
      alt: 'HTML'
    },
    
    {
      id: 2,
      name: 'css',
      className: 'css-icon skill-icon',
      source: cssLogo,
      alt: 'CSS'
    },

    {
      id: 3,
      name: 'javascript',
      className: 'javascript-icon skill-icon',
      source: javascriptLogo,
      alt: 'JavaScript'
    },

    {
      id: 4,
      name: 'react',
      className: 'react-icon skill-icon',
      source: reactLogo,
      alt: 'React.js'
    },

    {
      id: 5,
      name: 'aspnet',
      className: 'aspnet-icon skill-icon',
      source: aspnetLogo,
      alt: 'ASP.NET'
    },

    {
      id: 6,
      name: 'mysql',
      className: 'mysql-icon skill-icon',
      source: mySqlLogo,
      alt: 'MySql'
    },

    {
      id: 7,
      name: 'python',
      className: 'python-icon skill-icon',
      source: pythonLogo,
      alt: 'Python'
    },

    {
      id: 8,
      name: 'wordpress',
      className: 'wordpress-icon skill-icon',
      source: wordPressLogo,
      alt: 'WordPress'
    },

    {
      id: 9,
      name: 'c#',
      className: 'cSharp-icon skill-icon',
      source: cSharpLogo,
      alt: 'C#'
    },

    {
      id: 10,
      name: 'git',
      className: 'git-icon skill-icon',
      source: gitLogo,
      alt: 'Git'
    },

    {
      id: 11,
      name: 'github',
      className: 'github-icon skill-icon',
      source: gitHubLogo,
      alt: 'GitHub'
    },

    {
      id: 12,
      name: 'vsCode',
      className: 'vs-studio-icon skill-icon',
      source: vsCodeLogo,
      alt: 'Visual Studio Code'
    },

    {
      id: 13,
      name: 'visualStudio',
      className: 'visual-studio-icon skill-icon',
      source: visualStudioLogo,
      alt: 'Visual Studio'
    },
  ]

  const specialization = [
    {
      id: 1001,
      className: ' spec-box spec-box-one flex',
      specIconClassName: 'spec-box-icon spec-box-one-icon',
      specIcon: faGlobe,
      title: 'Front-end Development',
      description: 'Responsive and scalable websites depending on the scale of the business'
    },

    {
      id: 1002,
      className: 'spec-box spec-box-two flex',
      specIconClassName: 'spec-box-icon spec-box-two-icon',
      specIcon: faCode,
      title: 'Back-end Development',
      description: 'Responsive and scalable websites depending on the scale of the business'
    },

    {
      id: 1003,
      className: 'spec-box spec-box-three flex',
      specIconClassName: 'spec-box-icon spec-box-three-icon',
      specIcon: faBarsProgress,
      title: 'Web CMS Development',
      description: 'Responsive and scalable websites depending on the scale of the business'
    }
  ]


  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-heading center">
          <h6>What I do</h6>
          <motion.h3
            initial={{y: 25, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            viewport={{once: true, margin: "-500px 0px"}}
          >
            My <span>Skills</span>
          </motion.h3>
          <p>
            I like to develop responsive and good looking software products
          </p>
        </div>
        <motion.div 
          className="skills-set"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: {  ease: "easeInOut", duration: 0.8, delay: 0.8 } }}
          exit={{ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.4}}}
          viewport={{once: true, margin: "-200px 0px"}}
        >
          {programIcons.map((program) => (
            <div className={program.className} key={program.id}>
              <img src={program.source} alt={program.alt} className={program.imgClassName}/>
            </div>
          ))}
        </motion.div>
        <motion.div 
          className="specialization"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: {  ease: "easeInOut", duration: 0.8, delay: 1.3 } }}
          exit={{ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.4}}}
          viewport={{once: true, margin: "-200px 0px"}}
        >
          {specialization.map((spec) => (
            <div className={spec.className} key={spec.id}>
              <div className={spec.specIconClassName}>
                <FontAwesomeIcon icon={spec.specIcon} className="fa-icon" />
              </div>
              <div className="spec-text">
                <h4>{spec.title}</h4>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;