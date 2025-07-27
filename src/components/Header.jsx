import { useState } from 'react';
import React from "react";
import './Header.css';
import logo from '../assets/imagemAurora.jpeg';
import logo2 from '../assets/bolsa2.png';
import logo3 from '../assets/coracao.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const [itemCount, setItemCount] = useState(2); // Exemplo: 2 itens no carrinho
  const [total, setTotal] = useState(57.00);     // Exemplo: total de R$ 57,00

  return ( 
    <div>
      <div className="container"> 
        <div className="header-title"> 
          <img src={logo} alt="Logo" className="logo" />
          <h1>Aurora Verde</h1>     
        </div>

        <form className='form'>
          <div className="input-wrapper">
            <input type="text" placeholder="Search"/>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          <button type="submit">Search</button>   
        </form>
    
        <img src={logo3} alt="Logo3" className="logo terceira-logo" /> 
        
        <div className='cart-infor'>   
          {/* Bolsa com a bolinha */}
          <div className="cart-icon-container">
            <img src={logo2} alt="Carrinho" className="logo segunda-logo" />
            <div className="divider"></div> {/* <-- O tracinho */}
            {itemCount > 0 && (
              <div className="item-count">
                {itemCount}
              </div>
            )}
          </div>

          {/* Texto Shopping Cart e Total */}
          <div className="cart-text">
            <span>Shopping cart:</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
            </div>
      </div>
    
  );
}

export default Header;





