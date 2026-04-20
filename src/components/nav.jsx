import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#' },
  { label: 'Pages', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact Us', href: '#' },
];

function Nav() {
  return (
    <nav className="nav-container" aria-label="Navega├º├úo principal">
      <ul className="nav-list">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
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
