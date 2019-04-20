import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import {colors} from './misc/variables'
// import logo from '../img/logo.svg'


// Styled Components

const LogoName = styled.h1`
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
`
const NavMenu = styled.div`
  display: flex;
  align-items: stretch;
  margin-right: -.75rem;
  flex: 1 0 auto;
  justify-content: right;
  margin: auto;
  @media (max-width: 767.98px) { 
    flex-wrap: wrap;
  }
`
const NavBarItem = styled(Link)`
  color: ${colors.white}
  flex: 1 0 100px;
  max-width: 100px;
  @media (max-width: 767.98px) { 
    color: ${colors.black}
    flex: 1 0 100%;
    max-width: 100%;
    text-align: center;
   }
   &:hover{
    text-decoration: underline;
   }
`;
const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
          <LogoName>Luis Luis</LogoName>
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <NavMenu>
        <NavBarItem to="/about">
          About
        </NavBarItem>
        <NavBarItem to="/products">
          Products
        </NavBarItem>
        <NavBarItem to="/contact">
          Contact
        </NavBarItem>
      </NavMenu>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
