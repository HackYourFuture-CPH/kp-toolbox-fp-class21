import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Navbar } from './components/Navigation/Navbar.component';
import { Main } from './components/Main/Main';
import { FavouritePage } from './components/FavoritesToolPage/FavoritesToolPage.component';
import { ToolDetailsPage } from './components/ToolDetailsPage/ToolDetailsPage.component';
import { Footer } from './components/Footer/Footer.component';
import { AuthContextProvider } from './firebase/AuthContext';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/tools/:id" element={<ToolDetailsPage />} />
              <Route path="/about-toolbox" element="" />
              <Route path="/contact-us" element="" />
              <Route path="/user-name" element="" />
              <Route path="/favourites" element={<FavouritePage />} />
            </Routes>
          </Main>
          <Footer />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
