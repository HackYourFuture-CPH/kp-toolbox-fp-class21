import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Navbar } from './components/Navigation/Navbar.component';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/about-toolbox" element="" />
            <Route path="/contact-us" element="" />
            <Route path="/user-name" element="" />
            <Route path="/log-in" element="" />
            <Route path="/log-out" element="" />
            <Route path="/favourites" element="" />
          </Routes>
        </Main>
      </Router>
    </div>
  );
}

export default App;
