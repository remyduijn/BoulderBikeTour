import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: right;
  padding: 0 30px;
  height: 650px;
  position: relative;
  z-index: 1;
`;

export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AboutH1 = styled.h1`
  color: #fff;
  font-size: 42px;
  position: absolute;
  margin-top: 5rem;
  padding-right: 3rem;
  text-shadow: 1px 1px 4px #000000;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    padding-right: 0;
    padding-left: 10px;
    margin-top: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
    margin-top: 3rem;
  }
`;

