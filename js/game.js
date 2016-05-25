
var Game = function(players = [new Computer, new Human]){
  this.board = new Board,
  this.players = players,
  this.turn = this.players[1],
  this.winner = null
};

Game.prototype.switchTurn = function() {
  if(this.turn.piece.symbol == 'X'){
    this.turn = this.players[0]
  } else if(this.turn.piece.symbol == 'O'){
    this.turn = this.players[1]
  };
};

Game.prototype.endGame = function(player){
  this.winner = player
  var setTimeoutId = setTimeout(function(){
    alert('The winner is ' + player.name);
  }, 1000)
  return true;
}

Game.prototype.tieGame = function() {
  alert('The Game is a tie');
};


// new game instance for each upper level cell