import React from 'react';
import Cup from '../assets/cup.gif';


const Home = () => {
  return (
    <section className="Home">
      <h2>2019 Stanley Cup Champions!</h2>
      <img src={Cup} className="Cup" />
    </section>
  )
}

export default Home;