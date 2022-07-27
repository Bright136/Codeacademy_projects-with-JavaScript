const team = {
    _players: [{ // Creating players
      firstName: 'Clay',
      lastName: 'Addai',
      age: 28
    }, 
    {
      firstName: 'Asagna',
      lastName: 'Kole',
      age: 27
    },
    {
      firstName: 'Tipper',
      lastName: 'Quam',
      age: 25
    }],
    _games: [{ // Created games
      opponent: 'Kasoa Nets',
      teamPoints: 200,
      opponentPoints: 250
    },
    {
      opponent: 'Fadama Hawks',
      teamPoints: 400,
      opponentPoints: 350
    },
    {
      opponent: 'Nima Thugs',
      teamPoints: 340,
      opponentPoints: 370
    }],
    get players(){ // Created getters to return  players
      return this._players
    }, // Created getters to return  games
    get games(){
      return this._games
    }, // created a method to add a  new player
    addPlayer(newFirstName, newLastName, newAge){
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName, 
        age: newAge,
      }
      return this._players.push(newPlayer)
  
    }, // created a method to add a  new game
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      return this._games.push(newGame)
    }
  }
  
  // Called the addplayer method
  team.addPlayer('Bugs', 'Bunny', 76)
  
  // Called the addgame method
  team.addGame('Titans', 100, 98)
  
  // logged the games and player to the console ussing the getters
  console.log(team.players)
  console.log(team.games)
  
  
  