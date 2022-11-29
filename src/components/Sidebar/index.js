import React from 'react';
import {Link} from "react-router-dom";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
        <SidebarMenu>
          <SidebarLink>
            <Link to='/Gallery'>Photo gallery</Link>
          </SidebarLink>
          <SidebarLink>
            <Link to='/Location'>Live positions</Link>
          </SidebarLink>
          <SidebarLink>
            <Link to='/Riders'>Riders</Link>
          </SidebarLink>
          <SidebarLink>
            <Link to='/Contest'>Contest</Link>
          </SidebarLink>
          <SidebarLink>
            Contact
          </SidebarLink>
        </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
