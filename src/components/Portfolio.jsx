import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Button from '@material-ui/core/Button';

import portfolioCards from '../data/portfolioCards';

import '../styles/Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio-section">
      <Container className="portfolio">
        <h2>PORTFOLIO</h2>
        <Row>
          {portfolioCards.map(portfolioCard => (
            <Col xl="6" lg="6" md="12" sm="12" xs="12"
              key={portfolioCard.id}
            >
              <Card>
                <a href={portfolioCard.link}
                  target={portfolioCard.target}
                  rel={portfolioCard.rel}>
                  <CardImg
                    top
                    width="100%"
                    src={portfolioCard.photo}
                    alt={portfolioCard.title}
                  />
                </a>
                <CardBody>
                  <CardTitle>{portfolioCard.title}</CardTitle>
                  <CardText>{portfolioCard.description}</CardText>
                  <Button
                    href={portfolioCard.link}
                    target={portfolioCard.target}
                    rel={portfolioCard.rel}>
                    <MdKeyboardArrowRight className="right-arrow" /> Voir
                    </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default Portfolio;