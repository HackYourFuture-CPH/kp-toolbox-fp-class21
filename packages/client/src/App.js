import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Navbar } from './components/Navigation/Navbar.component';
import { Main } from './components/Main/Main';
import { ToolDetailsPage } from './components/ToolDetailsPage/ToolDetailsPage.component';
import { Footer } from './components/Footer/Footer.component';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="app">
      <Router>
        {/* properties to imitate logged-in/logged-out state of the navigation */}
        <Navbar isAuth={isAuth} userName="Magdalena" />
        <Main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/tools/:id" element={<ToolDetailsPage />} />
            <Route path="/about-toolbox" element="" />
            <Route path="/contact-us" element="" />
            <Route path="/user-name" element="" />
            <Route path="/favourites" element="" />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
