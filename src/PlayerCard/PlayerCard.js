import React from 'react';

const PlayerCard = (props) => {
  const {name, image, number, position, height, weight, born, birthplace} = props;
  return (
    <article className="PlayerCard">
      <h4>{number}</h4>
      <image src={image} alt={name} />
      <h3>{name}</h3>
      <h5>{position}</h5>
      <h5>{height}</h5>
      <h5>{weight}</h5>
      <h5>{born}</h5>
      <h5>{birthplace}</h5>
    </article>
  )
}

export default PlayerCard;