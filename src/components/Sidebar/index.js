import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {/* <SidebarWrapper> */}
        <SidebarMenu>
          <SidebarLink>
            Photo gallery
          </SidebarLink>
          <SidebarLink>
            Live positions
          </SidebarLink>
          <SidebarLink>
            Contest
          </SidebarLink>
          <SidebarLink>
            Register
          </SidebarLink>
          <SidebarLink>
            Contact
          </SidebarLink>
        </SidebarMenu>
      {/* </SidebarWrapper> */}
    </SidebarContainer>
  );
};

export default Sidebar;
