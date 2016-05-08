
var Game = function(players = [new Computer, new Human]){
  this.board = new Board,
  // this.pieces = [new Cross, new Nought],
  this.players = players,
  this.turn = this.players[1],
  this.winner = null
};

Game.prototype.switchTurn = function() {
  debugger;
  if(this.turn.piece.symbol == 'X'){
    this.turn = this.players[0]
  } else if(this.turn.piece.symbol == 'O'){
    this.turn = this.players[1]
  };
};

Game.prototype.endGame = function(player){
  this.winner = player
  alert('The winner is ' + this.turn.name)
}


// new game instance for each upper level cell