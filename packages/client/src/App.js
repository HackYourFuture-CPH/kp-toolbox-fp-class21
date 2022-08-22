import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { Navbar } from './components/Navigation/Navbar.component';
import { Main } from './components/Main/Main';
import { FavouritePage } from './components/FavoritesToolPage/FavoritesToolPage.component';
import { ToolDetailsPage } from './components/ToolDetailsPage/ToolDetailsPage.component';
import { Footer } from './components/Footer/Footer.component';
import { ContactUs } from './components/ContactUs/ContactUs/ContactUs.component';
import { Inbox } from './components/InboxMessageAdmin/Inbox.component';
import { AuthContextProvider, UserAuth } from './firebase/AuthContext';
import { AboutToolbox } from './components/AboutToolbox/AboutToolbox.component';
import { DeleteConfirmation } from './components/DeleteToolConfirmation/DeleteToolConfirmation.component';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="app">
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Wrapper>
            <Main>
              <RouteList />
            </Main>
          </Wrapper>
          <Footer />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

const RouteList = () => {
  const { localUser } = UserAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/tools/:id" element={<ToolDetailsPage />} />
      <Route path="/about-toolbox" element={<AboutToolbox />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/user-name" element="" />
      <Route path="/favourites" element={<FavouritePage />} />
      <Route
        path="/tools/delete-confirmation/:id"
        element={<DeleteConfirmation />}
      />
      <Route path="/tools/edit/:id" element="" />
      {localUser && localUser.is_admin && (
        <Route path="/inbox-admin" element={<Inbox />} />
      )}
    </Routes>
  );
};

export default App;
