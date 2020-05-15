import React from 'react';
import Navbar from './components/layout/Navbar';
import MatchList from './components/matches/MatchList';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar title={'Football Stuff'} />
      <MatchList />
    </div>
  );
}

export default App;
