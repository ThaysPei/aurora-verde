import { useCallback, useState } from 'react';
import './Header.css';
import logo from '../assets/imagemAurora.jpeg';
import logo2 from '../assets/bolsa2.png';
import logo3 from '../assets/coracao.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../contexts/CartContext';
import { useSearch } from '../contexts/SearchContext';

function Header() {
  const [localTerm, setLocalTerm] = useState('');
  const { totalItems, totalPrice, setIsCartOpen } = useCart();
  const { search } = useSearch();

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      search(localTerm);
    },
    [localTerm, search],
  );

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <header className="container">
      <div className="header-title">
        <img src={logo} alt="Logo Aurora Verde" className="logo" />
        <h1>Aurora Verde</h1>
      </div>

      <form className="form" onSubmit={handleSearch}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search products..."
            value={localTerm}
            onChange={(e) => setLocalTerm(e.target.value)}
            aria-label="Search products"
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <button type="submit">Search</button>
      </form>

      <img src={logo3} alt="Favoritos" className="logo terceira-logo" />

      <div className="cart-info" onClick={handleCartClick} role="button" tabIndex={0} aria-label="Abrir carrinho">
        <div className="cart-icon-container">
          <img src={logo2} alt="Cart" className="logo segunda-logo" />
          <div className="divider" />
          {totalItems > 0 && <div className="item-count">{totalItems}</div>}
        </div>

        <div className="cart-text">
          <span>Cart:</span>
          <strong>R$ {totalPrice.toFixed(2)}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;
