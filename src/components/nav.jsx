import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';




function Nav(){

 return(

  <nav className="nav-container">
    <ul className="nav-list">
    <li><a href="#">Home</a></li>
    <li><a href="#">Shop</a></li>
    <li><a href="#">Pages</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Contact Us</a></li>
    <li className="telefone">
    <FontAwesomeIcon icon={faPhone} className="icon-search" />
    <span>(219)555 -0114</span>
    </li>
    </ul>
    
  </nav>
 )

}

export default Nav;
