// src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PredictionPage from './PredictionPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/prediction" exact component={PredictionPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
