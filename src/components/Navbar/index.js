// import React, { useState, useEffect } from 'react';
import '../../styles/Navbar.css'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              <div id="logo">BBT</div>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks className='nav-links' to='/Gallery'>
                  Photo gallery
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks className='nav-links'>
                  Live positions
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks className='nav-links'>
                  Contest
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks className='nav-links'>
                  Register
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/Contact'>Contact</NavBtnLink> 
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
