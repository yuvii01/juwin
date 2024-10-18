import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Personality from './pages/Personality';
import Checkout from './pages/Checkout';
import Political from './voices/Political';
import Personalitydhruv from './pages/Personalitydhruv';
import Pelon from './pages/Pelon';
import Business from './voices/Business';

const App = () => {
  const [showHeader, setShowHeader] = useState(false); // State to control header visibility
  const [loaderShown, setLoaderShown] = useState(false); // State to track loader visibility

  function loaderAnimation() {
    const loader = document.querySelector("#loader");
    setTimeout(function () {
      loader.style.top = "-100%";
      setShowHeader(true);
      setLoaderShown(true); // Mark loader as shown
    }, 4200);
  }

  useEffect(() => {
    if (!loaderShown) {
      loaderAnimation();
    } else {
      setShowHeader(true); // Ensure header is shown if loader was already displayed
    }
  }, [loaderShown]); // Run effect when loaderShown changes

  return (
    <Router>
      <div id="loader">
        <h1>PERSPECTIVE</h1>
        <h1>EXPERIENCES</h1>
        <h1>CONTENT</h1>
      </div>
      
      {showHeader && <Header />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p" element={<Personality />} />
        <Route path="/pelon" element={<Pelon />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Political" element={<Political />} />
        <Route path="/pdhruv" element={<Personalitydhruv />} />
        <Route path="/political" element={<Political />} />
        <Route path="/business" element={<Business />} />
        
      </Routes>
    </Router>
  );
};

export default App;
