import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-bottom: 4rem;
  padding-top: 4rem;
  `;
  
export const InfoWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 150px;
  z-index: 3;

  @media screen and (max-width: 1200px) {
    padding: 0 55px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const InfoCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 10px;
  width: 100%;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const InfoH2 = styled.h2`
  font-size: 1.9rem;
  color: #FDBD9A;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const InfoP = styled.p`
  font-size: 1.4rem;
  color: #36454d;
  text-align: left;
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
