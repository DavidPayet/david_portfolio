import React from 'react';
import Carousel from 'react-multi-carousel';
import { Container } from 'reactstrap';

import CalculatorCard from './CalculatorCard';
import ChessPlayersCard from './ChessPlayersCard';
import CvdCard from './CvdCard';
import DatePickerCard from './DatePickerCard';
import Dpy1fCard from './Dpy1fCard';
import GifCard from './GifCard';
import ImcCard from './ImcCard';
import SnakeCard from './SnakeCard';
import TicTacToeCard from './TicTacToeCard';
import TimerCard from './TimerCard';
import ToDoListCard from './ToDoListCard';

import './Portfolio.scss';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio-section">
      <Container className="portfolio">
        <h1>Quelques réalisations...</h1>
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          showDots={true}
          className="carousel"
        >
          <Dpy1fCard />
          <CvdCard />
          <ImcCard />
          <ChessPlayersCard />
          <ToDoListCard />
          <TicTacToeCard />
          <CalculatorCard />
          <TimerCard />
          <SnakeCard />
          <GifCard />
          <DatePickerCard />
        </Carousel>
      </Container>
    </div>
  );
}

export default Portfolio;
