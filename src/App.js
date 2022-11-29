import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import GalleryPage from './pages/Gallery';
import LocationPage from './pages/Location';
import RidersPage from './pages/Riders';
import ContestPage from './pages/Contest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
        <Route path='/location' element={<LocationPage/>} />
        <Route path='/riders' element={<RidersPage/>} />
        <Route path='/contest' element={<ContestPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
