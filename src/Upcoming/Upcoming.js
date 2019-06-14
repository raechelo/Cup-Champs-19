import React, { Component } from 'react';
import cleanGames from '../api/cleanGames';

class Upcoming extends Component {

  componentDidMount() {
    fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=134859')
    .then(res => res.json())
    .then(res => cleanGames(res))
    .catch(err => console.log(err))
  }

  render () {
    return (
      <section className="Upcoming">
       <p>There are no current games!</p>
       <p>Check back later!</p>
      </section>
    )
  }
}

export default Upcoming;