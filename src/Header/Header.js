import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import Upcoming from '../Upcoming/Upcoming';
import Home from '../Home/Home';

const Header = () => {
  return (
    <header className="Header">
    <NavLink to='/' className="home-link">
      <h1>St. Louis Blues</h1>
      <h2>2019 Stanley Cup Champions</h2>
      </NavLink>
      <NavLink to='/upcoming_games'>
        <h3>Upcoming Games</h3>
      </NavLink>

      <Route exact path='/' component={Home} />
      <Route exact path='/upcoming_games' component={Upcoming} />
    </header>
  )
}

export default Header;