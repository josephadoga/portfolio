
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react";

import htmlBadge from "../media/htmlBadge.svg";
import cssBadge from "../media/CSSBadge.svg";
import javaScriptBadge from "../media/JavaScriptBadge.svg";
import reactBadge from "../media/reactBadge.svg";
import aspDotNetBadge from "../media/asp-dotnet-mvc.png";

import apexInnovationImg from "../media/apex-innovations-screenshot.png";
import josifyShopImg from "../media/josify-shop-screenshot.png";
import taskTrackerImg from "../media/task-tracker-screenshot.png";
import githubFinderImg from "../media/user-display-github-finder-screenshot.png";

function Portfolio() {

  const projects = [
    {
      id: 2001,
      name: 'Apex Innovations',
      projectImage: apexInnovationImg,
      projectTitle: 'Apex Innovations',
      projectDescription: 'Collaborated to make a standard website with common pages.',
      techListSource: [
        {
          id: 2.11,
          source: htmlBadge
        },
        {
          id: 2.12,
          source: cssBadge
        },
        {
          id: 2.13,
          source: javaScriptBadge
        }
      ],
      githubLink: 'https://github.com/josephadoga/apex-innovations',
      previewLink: 'https://josephadoga.github.io/apex-innovations/'
    },

    {
      id: 2002,
      name: 'Josify Shop',
      projectImage: josifyShopImg,
      projectTitle: 'Josify Shop',
      projectDescription: 'A react shopping website that fetches from a REST API',
      techListSource: [
        {
          id: 2.21,
          source: reactBadge
        },
        {
          id: 2.22,
          source: cssBadge
        }
      ],
      githubLink: 'https://github.com/josephadoga/josify-shop/',
      previewLink: 'https://josify-shop.netlify.app/'
    },

    {
      id: 2003,
      name: 'GitHub Finder',
      projectImage: githubFinderImg,
      projectTitle: 'GitHub Finder',
      projectDescription: 'A React App that fetches any User Data from GitHub\'s API',
      techListSource: [
        {
          id: 2.31,
          source: reactBadge
        },
        {
          id: 2.32,
          source: cssBadge
        }
      ],
      githubLink: 'https://github.com/josephadoga/github-finder/',
      previewLink: 'https://github-findergf.netlify.app/'
    },

    {
      id: 2004,
      name: 'Task Tracker',
      projectImage: taskTrackerImg,
      projectTitle: 'Task Tracker',
      projectDescription: 'A responsive To Do List App made with React.js',
      techListSource: [
        {
          id: 2.41,
          source: reactBadge
        },
        {
          id: 2.42,
          source: cssBadge
        }
      ],
      githubLink: 'https://github.com/josephadoga/todo-list-app',
      previewLink: 'https://josephadoga.github.io/todo-list-app/'
    }
  ]

  const topProjects = projects.slice(0, 3);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects">
          <div className="section-heading center">
            <h6>What I've done</h6>
            <motion.h3
              initial={{y: 25, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.5, ease: "easeInOut"}}
              viewport={{once: true, margin: "-500px 0px"}}
            >
              My <span>Projects</span>
            </motion.h3>
            <p>
              Projects I have worked on.
            </p>
          </div>
          <div className="project-list">
            {topProjects.map((proj) => (
              <motion.div 
                className="project-box flex" 
                key={proj.id}

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: {  ease: "easeInOut", duration: 0.8, delay: 0.8 } }}
                exit={{ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.4}}}
              >
                <aside className="project-aside">
                  <img src={proj.projectImage} alt={proj.projectTitle} className="project-pic" />
                </aside>
                <article className="project-article">
                  <h3 className="project-box-item project-title">{proj.projectTitle}</h3>
                  <p className="project-box-item project-description">
                    {proj.projectDescription}
                  </p>
                  <div className="project-box-item project-tech-list">
                    {proj.techListSource.map((techList) => (
                      <img src={techList.source} alt={techList.source} key={techList.id} />
                    ))}
                  </div>
                  <div className="project-box-item project-links mainflex gap-20">
                    <a href={proj.githubLink} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="fa-github project-icon" />
                    </a>
                    <a href={proj.previewLink} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-arrow-up-right-from-square project-icon" />
                    </a>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;