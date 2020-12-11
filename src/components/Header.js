import { Link } from 'react-router-dom';

import { TiHome } from 'react-icons/ti';
import { GrWorkshop } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Header() {
  const iconSize = 20;
  return (
    <header>
      <Link to="/" className="icons">
        <TiHome size={ iconSize } />
        {' '}
        Home
      </Link>
      <Link to="/sobre" className="icons">
        <BsFillPersonLinesFill size={ iconSize } />
        Sobre
      </Link>
      <Link to="/projetos" className="icons">
        <GrWorkshop size={ iconSize } />
        Projetos
      </Link>
    </header>
  );
}
