import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Navbar } from './components/Navigation/Navbar.component';
import { Main } from './components/Main/Main';
import { ToolDetailsPage } from './components/ToolDetailsPage/ToolDetailsPage.component';
import { Footer } from './components/Footer/Footer.component';
import { ContactUs } from './components/ContactUs/ContactUs/ContactUs.component'
import { Inbox } from './components/InboxMessageAdmin/Inbox.component'

function App() {
  return (
    <div className="app">
      <Router>
        {/* properties to imitate logged-in/logged-out state of the navigation */}
        <Navbar isLogedIn={true} userName="Magdalena" />
        <Main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/tools/:id" element={<ToolDetailsPage />} />
            <Route path="/about-toolbox" element="" />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/user-name" element="" />
            <Route path="/sign-in" element="" />
            <Route path="/sign-out" element="" />
            <Route path="/favourites" element="" />
            <Route path="/inbox-admin" element={<Inbox />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
