import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import Upcoming from '../Upcoming/Upcoming';
import Home from '../Home/Home';

const Header = () => {
  return (
    <header className="Header">
    <NavLink to='/' className="link">
      <h1>St. Louis Blues</h1>
      <h2>2019 Stanley Cup Champions</h2>
      </NavLink>
      <NavLink to='/upcoming_games' className='link'>
        <h3>Upcoming Games</h3>
      </NavLink>

    </header>
  )
}

export default Header;