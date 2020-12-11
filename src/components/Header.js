// import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Header() {
  const iconSize = 20;
  return (
    <header>
      {/* <h1 className="name">Vinicius Buzato</h1> */}
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
