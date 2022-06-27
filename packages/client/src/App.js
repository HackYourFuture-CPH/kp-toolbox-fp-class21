import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Navbar } from './components/Navigation/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about-toolbox" element={<for_about file />} />
          <Route path="/contact-us" element={<for_contact_us file />} />
          <Route path="/log-In" element={<for_log_In file />} />
          <Route path="/favourites" element={<for_favourites file />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
