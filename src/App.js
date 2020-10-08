import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Page from './pages/Page';

import { MainContainer, MainContentContainer } from './components/styled/Containers';

import './css/basic.css';

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Header />
        <MainContentContainer>
          <Page />
        </MainContentContainer>
        <Footer />
      </MainContainer>
    </Router>
  );
};

export default App;
