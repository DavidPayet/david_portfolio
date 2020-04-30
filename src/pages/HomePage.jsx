import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import About from '../components/About';
import Competences from '../components/Competences';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage" id="up-page">
      <NavBar />
      <Header />
      <About />
      <Competences />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default HomePage;