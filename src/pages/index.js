import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import HeroSection from '../components/HeroSection';
import CountdownSection from '../components/CountdownSection';
import AboutSection from '../components/AboutSection';
import InfoSection from '../components/InfoSection';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <InfoSection />
      <Footer2 />
      <Footer />
    </>
  );
}

export default Home;
