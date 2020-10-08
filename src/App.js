import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Page from './pages/Page';

import { MainContainer } from './components/styled/Containers';

import './css/basic.css';

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Header />
        <Page />
        <Footer />
      </MainContainer>
    </Router>
  );
};

export default App;
