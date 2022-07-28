import React from 'react';
import '../../styles/About.css'
import {
  AboutContainer,
  AboutBg,
  AboutContent,
  AboutH1,
  AboutP
} from './AboutElements';

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap');
</style>

function AboutSection () {
  return (
    <AboutContainer id='home'>
      <AboutBg>
        <div className='masthead2'></div>
      </AboutBg>
      {/* <AboutContent> */}
        <AboutH1>Start Training for Apr. 1!</AboutH1>
      {/* </AboutContent> */}
    </AboutContainer>
  );
}

export default AboutSection;