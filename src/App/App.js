import React from 'react';
import Header from '../Header/Header';
import Roster from '../Home/Roster';
import { Route } from 'react-router-dom';
import Upcoming from '../Upcoming/Upcoming';
import Home from '../Home/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path='/' component={Home} />
      <Route exact path='/roster' component={Roster} />
      <Route exact path='/upcoming_games' component={Upcoming} />      
    </div>
  );
}

export default App;
