const cleanGames = arr => {
  return arr.map(a => {
    return {
      homeTeam: a.strHomeTeam,
      awayTeam: a.strAwayTeam,
      date: a.dateEvent
    }
  })
}

export default cleanGames;