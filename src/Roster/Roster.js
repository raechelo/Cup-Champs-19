import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import Blues from '../api/data/data';

const Roster = () => {
  let displayCards = Blues.map(blue => <PlayerCard {...blue} />)
  return (
    <section className="Roster">
      {displayCards}
    </section>
  )
}

export default Roster;