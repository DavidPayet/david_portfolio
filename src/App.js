import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CvPage from './pages/CvPage';
import Footer from './components/Footer';
import ChessPlayersPage from './pages/ChessPlayersPage';
import MiniAppsPage from './pages/MiniAppsPage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/cv" component={CvPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/miniapps" component={MiniAppsPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/chessplayers" component={ChessPlayersPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;