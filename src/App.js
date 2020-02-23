import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CvPage from './components/pages/CvPage';
import ToDoListPage from './components/pages/ToDoListPage';
import GifPage from './components/pages/GifPage';
import CalculatorPage from './components/pages/CalculatorPage';
import TimerPage from './components/pages/TimerPage';
import SnakePage from './components/pages/SnakePage';
import TicTacToePage from './components/pages/TicTacToePage';
import ChessPlayersPage from './components/pages/ChessPlayersPage';
import DatePickerPage from './components/pages/DatePickerPage';

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
        </Switch>
      </div>
    );
  }
}

export default App;