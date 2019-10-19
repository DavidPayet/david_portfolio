import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../NavBar';
import About from '../About';
import Competences from '../Competences';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';
import { Link } from "react-scroll";
import BackToTopButton from '../BackToTopButton';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage" id="up-page">
      <NavBar />
      <Container className="homePage">
        <Row>
          <Col lg="12" md="12" sm="12">
            <h1 className="lightSpeedIn">
              David payet
            </h1>
            <br />
            <h2 className="zoomInUp">
              Développeur Web Jr
            </h2>
            <Link
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="bottom-arrow">&#x2303;</span>
            </Link>
          </Col>
        </Row>
      </Container>
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