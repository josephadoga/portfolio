
import { useState } from 'react';
import { motion } from "motion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  const [isVisible, setVisibility] = useState(false);

  return (
    <header>
      <div className='container flex'>
        <a href="/">
          <h1 className='site-title'>{props.title}</h1>
        </a>
        <nav>
          <ul className='mainflex'>
          {props.links.map(nav => (
            <li key={nav.id}><a href={nav.url}>{nav.name}</a></li>
          ))}
          </ul>
        </nav>
        <div className="hamburger-menu">
          <FontAwesomeIcon 
            icon={isVisible ? faXmark : faBars}
            onClick={() => setVisibility(!isVisible)}
            className="fa-bars fa-x-mark hamburger-icon"
          />
          <div 
            className={isVisible ? 'hamburger-overlay active' : 'hamburger-overlay'}
            onClick={() => setVisibility(!isVisible)}
          >
          </div>
          <ul className={isVisible ? 'menu-box active' : 'menu-box'}>
            {props.links.map(nav => (
              <li key={nav.id} onClick={() => setVisibility(!isVisible)}>
                <a href={nav.url}>{nav.name}</a>
              </li>
            ))}
            <li>--------------------------</li>
            <li>
              <a href="https://www.github.com/josephadoga" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/josephadoga" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;