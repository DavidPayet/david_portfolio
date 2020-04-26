import React from 'react';
import NavBar from '../NavBar';
import Header from '../Header';
import About from '../About';
import Competences from '../Competences';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';
import BackToTopButton from '../BackToTopButton';
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