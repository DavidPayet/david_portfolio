import React from 'react';

import About from '../components/About';
import BackToTopButton from '../components/BackToTopButton';
import Contact from '../components/Contact';
import Competences from '../components/Competences';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Portfolio from '../components/Portfolio';

import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage" id="up-page">
      <NavBar />
      <Header />
      <About />
      <Competences />
      <Portfolio />
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default HomePage;