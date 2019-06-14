import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Route } from 'react-router-dom';
import Upcoming from '../Upcoming/Upcoming';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path='/' component={Home} />
      <Route exact path='/upcoming_games' component={Upcoming} />      
    </div>
  );
}

export default App;
