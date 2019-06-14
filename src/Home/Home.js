import React from 'react';
import Confetti from 'react-confetti';
import Cup from '../assets/cup.gif';
import { useWindowSize } from 'react-use-size';


const Home = () => {
  const { height, width } = useWindowSize()
  return (
    <section className="Home">
      <Confetti
        height={height}
        width={width}
        className='confetti'
        />
      <h2>2019 Stanley Cup Champions!</h2>
      <img src={Cup} className="Cup" />
    </section>
  )
}

export default Home;