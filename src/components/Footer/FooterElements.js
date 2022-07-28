import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #000;
`;

export const FooterWrap = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 15px auto 5px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 15px auto 10px auto;
  }
`;

export const FooterLogo = styled(Link)`
  color: #fff;
  font-family: 'Montserrat Alternates', sans-serif;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    margin-bottom: 12px;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 14px;
  padding: 0 3px;
  text-decoration: none;
  margin-bottom: 16px;

  &:hover {
    color: #ffab00;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  color: #fff;
  padding: 0 3px;
  margin-bottom: 16px;
  font-size: 14px;
  }
`;
