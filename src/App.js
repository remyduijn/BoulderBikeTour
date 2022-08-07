import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';
import LocationPage from './pages/Location';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
        <Route path='/location' element={<LocationPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
