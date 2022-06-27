import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Navbar } from './components/Navigation/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
