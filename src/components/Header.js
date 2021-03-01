import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { useEffect } from 'react';

export default function Header() {
  const iconSize = 20;
  useEffect(() => {
    const navigation = document.querySelector('header');
    const scrollNav = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navigation.style.background = '#000';
      } else {
        navigation.style.background = 'transparent';
      }
    };
    window.onscroll = () => scrollNav();
  }, []);
  return (
    <header>
      <div className="menu">
        <Link to="/" className="menu-link">
          <span className="menu-slash">./</span>
          home
        </Link>
        <Link to="/sobre" className="menu-link">
          <span className="menu-slash">./</span>
          sobre
        </Link>
        <Link to="/portfolio" className="menu-link">
          <span className="menu-slash">./</span>
          portfólio
        </Link>
        <Link to="/contato" className="menu-link">
          <span className="menu-slash">./</span>
          contato
        </Link>
      </div>
      <div className="icons-header">
        <a href="https://github.com/vbuzato" className="icons" target="_blank" rel="noreferrer">
          <FaGithub size={ iconSize } />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/viniciusbuzato/" className="icons" target="_blank" rel="noreferrer">
          <AiFillLinkedin size={ iconSize } />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
