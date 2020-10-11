import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './AppProvider';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './pages/Page';

import { MainContainer, MainContentContainer } from './components/styled/Containers';

import './css/basic.css';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <MainContainer>
          <Header />
          <MainContentContainer>
            <Page />
          </MainContentContainer>
          <Footer />
        </MainContainer>
      </AppProvider>
    </Router>
  );
};

export default App;
