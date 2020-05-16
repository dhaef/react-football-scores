import React from 'react';
import Navbar from './components/layout/Navbar';
import MatchList from './components/matches/MatchList';
import Upcoming from './components/upcoming/Upcoming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/layout/Home';

const App = () => {
  return (
    <Router>
      <Navbar title={'React Football'} />
      <div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/scores' component={MatchList}></Route>
          <Route exact path='/upcoming' component={Upcoming}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
