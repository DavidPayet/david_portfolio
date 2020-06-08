import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import portfolioCards from '../data/portfolioCards';

import '../styles/Portfolio.scss'

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio-section">
      <Container className="portfolio">
        <h1>Quelques réalisations...</h1>
        <Row>
          {portfolioCards.map(portfolioCard => (
            <Col xl="4" lg="4" md="4" sm="12" xs="12"
              className="hovereffect"
              key={portfolioCard.id}
            >
              <img className="img-responsive" src={portfolioCard.photo} alt={portfolioCard.title} />
              <div className="overlay">
                <h2>{portfolioCard.title} </h2>
                <a className="info"
                  href={portfolioCard.link}
                  target={portfolioCard.target}
                  rel={portfolioCard.rel}
                >
                  {portfolioCard.description}
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio