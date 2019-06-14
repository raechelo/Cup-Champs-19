import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import Blues from '../data';

const Home = () => {
  let displayCards = Blues.map(blue => <PlayerCard {...blue} />)
  return (
    <section className="Home">
      {displayCards}
    </section>
  )
}

export default Home;