import React from 'react';
import '../../styles/Hero.css'
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP
} from './HeroElements';

function HeroSection () {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <div className='masthead'></div>
      </HeroBg>
      <HeroContent>
        <HeroH1><a className='text-small'>THE</a> Boulder Bike Tour</HeroH1>
        <HeroP>
          A once in a 10-year opportunity to race the Boulder and the Front Range of Colorado.
        </HeroP>
        <br></br>
        <p className="date">
          01-04-2023 
        </p>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
