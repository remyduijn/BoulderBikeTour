import React from 'react';
import '../../styles/About.css'
import {
  AboutContainer,
  AboutBg,
  AboutH1,
} from './AboutElements';

function AboutSection () {
  return (
    <AboutContainer id='home'>
      <AboutBg>
        <div className='masthead2'></div>
      </AboutBg>
        <AboutH1>Start Training for Apr. 1!</AboutH1>
    </AboutContainer>
  );
}

export default AboutSection;