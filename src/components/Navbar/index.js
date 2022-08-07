import '../../styles/Navbar.css'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLink
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
                <NavLink className='nav-links' to='/Gallery'>
                  Photo gallery
                </NavLink>
                <NavLink className='nav-links' to='/Location'>
                  Live positions
                </NavLink>
                <NavLink className='nav-links' to='/Contest'>
                  Contest
                </NavLink>
                <NavLink className='nav-links' to='/Register'>
                  Register
                </NavLink>
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
