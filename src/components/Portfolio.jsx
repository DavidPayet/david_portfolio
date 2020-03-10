import React from 'react';
import { Container } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ToDoListCard from './ToDoListCard';
import GifCard from './GifCard';
import CalculatorCard from './CalculatorCard';
import TimerCard from './TimerCard';
import SnakeCard from './SnakeCard';
import TicTacToeCard from './TicTacToeCard';
import ChessPlayersCard from './ChessPlayersCard';
import DatePickerCard from './DatePickerCard';
import Dpy1fCard from './Dpy1fCard';

import './Portfolio.scss';


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
          <ToDoListCard />
          <TicTacToeCard />
          <CalculatorCard />
          <TimerCard />
          <SnakeCard />
          <GifCard />
          <ChessPlayersCard />
          <DatePickerCard />
        </Carousel>
      </Container>
    </div>
  );
}

export default Portfolio;
