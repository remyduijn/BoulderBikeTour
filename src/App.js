import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
