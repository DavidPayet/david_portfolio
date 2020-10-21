import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CvPage from './pages/CvPage';
import ChessPlayersPage from './pages/ChessPlayersPage';
import MiniAppsPage from './pages/MiniAppsPage';
import LoaderPage from './pages/LoaderPage';

import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, []);

  return (
    <div className="App">
      {loading === false ? (
        <Switch>
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/cv" component={CvPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/miniapps" component={MiniAppsPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/chessplayers" component={ChessPlayersPage} />
        </Switch>
      ) : (
          <LoaderPage />
        )}
    </div>
  );
}


export default App;