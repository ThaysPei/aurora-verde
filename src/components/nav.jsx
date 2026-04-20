import './Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Pages', path: '/pages' },
  { label: 'Blog', path: '/blog' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

function Nav() {
  return (
    <nav className="nav-container" aria-label="Navegação principal">
      <ul className="nav-list">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
        <li className="telefone">
          <FontAwesomeIcon icon={faPhone} className="icon-phone" />
          <span>(219) 555-0114</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
