import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import Upcoming from '../Upcoming/Upcoming';
import Home from '../Home/Roster';

const Header = () => {
  return (
    <header className="Header">
    <NavLink to='/' className="home link">
      <h1>St. Louis Blues</h1>
      </NavLink>
      <NavLink to='/roster' className='roster link'>
        <h3>Roster</h3>
      </NavLink>
      <NavLink to='/upcoming_games' className='games link'>
        <h3>Upcoming Games</h3>
      </NavLink>

    </header>
  )
}

export default Header;