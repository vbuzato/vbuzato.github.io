import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { useEffect } from 'react';

export default function Header() {
  const iconSize = 20;
  useEffect(() => {
    const navigation = document.querySelector('header');
    const scrollNav = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navigation.style.background = '#000';
      } else {
        navigation.style.background = 'transparent';
      }
    };
    window.onscroll = () => scrollNav();
  }, []);
  return (
    <header>
      {/* <h1 className="name">Vinicius Buzato</h1> */}
      <div className="menu">
        <Link to="/" className="menu-link">
          <span className="menu-slash">./</span>
          home
        </Link>
        <Link to="/sobre" className="menu-link">
          <span className="menu-slash">./</span>
          sobre
        </Link>
        <Link to="/porfolio" className="menu-link">
          <span className="menu-slash">./</span>
          portfolio
        </Link>
        <Link to="/contato" className="menu-link">
          <span className="menu-slash">./</span>
          contato
        </Link>
      </div>
      <div className="icons-header">
        <a href="https://github.com/vbuzato" className="icons">
          <FaGithub size={ iconSize } />
          {' '}
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/viniciusbuzato/" className="icons">
          <AiFillLinkedin size={ iconSize } />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
