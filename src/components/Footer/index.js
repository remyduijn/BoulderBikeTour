import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Divider
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <FooterLogo to='/' onClick={toggleHome}>BoulderBikeTour</FooterLogo>
            <SocialIcons>
              <SocialIconLink>
                <a>Disclamer</a>
              </SocialIconLink>
              <Divider><b>|</b></Divider>
              <SocialIconLink>
                <a>Privacy</a>
              </SocialIconLink>
              <Divider><b>|</b></Divider>
              <SocialIconLink>
                <a>News</a>
              </SocialIconLink>
              <Divider><b>|</b></Divider>
              <SocialIconLink>
                <a>About</a>
              </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>© 2022 All rights reserved Boulder Bike Tour</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
