import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CvPage from './pages/CvPage';
import ToDoListPage from './pages/ToDoListPage';
import GifPage from './pages/GifPage';
import CalculatorPage from './pages/CalculatorPage';
import TimerPage from './pages/TimerPage';
import SnakePage from './pages/SnakePage';
import TicTacToePage from './pages/TicTacToePage';
import ChessPlayersPage from './pages/ChessPlayersPage';
import DatePickerPage from './pages/DatePickerPage';
import ImcPage from './pages/ImcPage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/cv" component={CvPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/todolist" component={ToDoListPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/gif-generator" component={GifPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/calculator" component={CalculatorPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/timers" component={TimerPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/snake" component={SnakePage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/tictactoe" component={TicTacToePage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/chessplayers" component={ChessPlayersPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/datepicker" component={DatePickerPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/imc" component={ImcPage} />
        </Switch>
      </div>
    );
  }
}

export default App;