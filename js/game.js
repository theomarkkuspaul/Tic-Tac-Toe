
var Game = function(){
  this.board = new Board,
  this.pieces = [new Cross, new Nought],
  this.turn = new Cross
};

Game.prototype.switchTurn = function() {
  if(this.turn.symbol == 'X'){
    this.turn = new Nought
  } else if(this.turn.symbol == 'O'){
    this.turn = new Cross
  };
};

// new game instance for each upper level cell