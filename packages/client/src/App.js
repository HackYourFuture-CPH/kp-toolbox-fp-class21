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
            <Route path="/about-toolbox" element={<for_about file />} />
            <Route path="/contact-us" element={<for_contact_us file />} />
            <Route path="/user-name" element={<for_user_name file />} />
            <Route path="/log-in" element={<for_log_in file />} />
            <Route path="/log-out" element={<for_log_out file />} />
            <Route path="/favourites" element={<for_favourites file />} />
          </Routes>
        </Main>
      </Router>
    </div>
  );
}

export default App;
