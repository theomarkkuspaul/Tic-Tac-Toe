
var Game = function(){
  this.board = new Board,
  this.pieces = [new Cross, new Nought],
  this.turn = new Cross,
  this.winner = null
};

Game.prototype.switchTurn = function() {
  if(this.turn.symbol == 'X'){
    this.turn = new Nought
  } else if(this.turn.symbol == 'O'){
    this.turn = new Cross
  };
};

Game.prototype.endGame = function(player){
  this.winner = player
  alert('The winner is ' + player.symbol)
}


// new game instance for each upper level cell