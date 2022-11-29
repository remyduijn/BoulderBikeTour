import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import Contest from '../components/ContestSection';
import Slogans from '../components/ContestSection/Slogans';

const API_URL = "http://localhost:3000/api/v1/slogans";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function SloganPage() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [slogans, setSlogans] = useState([]);

  useEffect(() => { 
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setSlogans(items);
      }
    }); 
    return () => (mounted = false);
  }, []);  

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Contest />
      <Slogans slogans={slogans} />
      <Footer2 />
      <Footer />
    </>
  );
}

export default SloganPage;
