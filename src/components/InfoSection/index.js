import React from 'react';
import '../../styles/Info.css'
import {
  InfoContainer,
  InfoWrapper,
  InfoCard,
  InfoH2,
  InfoP
} from './InfoElements';

const InfoSection = () => {
  return (
    <InfoContainer id='info'>
      <InfoWrapper>
        <div>
        <InfoCard>
          <InfoH2>The Boulder Bike Tour course runs 226.2 miles through the Front Range Colorado mountain range, starting in Boulder, CO at an elevation of 5,430 feet (1,655 m) above sea level.</InfoH2>
          <InfoP>
          We will continue to update the information on this page as we get closer to race day and more details become available.
          </InfoP>
        </InfoCard></div>
        <div>
        <InfoCard>
          <InfoH2>45,022</InfoH2>
          <InfoP>
            FINISHERS IN 2013
          </InfoP>
          <InfoH2>6:24:06</InfoH2>
          <InfoP>
            AVG. FINISH TIME
          </InfoP>
          <InfoH2>121</InfoH2>
          <InfoP>
            COUNTRIES
          </InfoP>
        </InfoCard></div>       
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
