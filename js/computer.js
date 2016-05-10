
var Computer = function(){
  this.name = 'Computer',
  this.piece = new Nought,
  this.playerType = 'computer'
}

Computer.prototype.possibleCells = function(board) {
  var possibilities = []

  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      if(board[(i + 1)][j] == null){
        possibilities.push([(i + 1), j])
      };
    };
  };
  return possibilities;
};

Computer.prototype.randomPossibleCell = function(possibleCells) {
  return possibleCells.sample()
};


Computer.prototype.evalBoard = function(possibleCells, board, symbol) {

  if(this.counterHorizontal(board)){
    var counterHorMove = this.counterHorizontal(board, symbol);
    return counterHorMove;
  } else if(this.counterVertical(this.columniseBoard(board))) {
    var counterVerMove = this.counterVertical(this.columniseBoard(board));
    return counterVerMove;
  } else {
    return this.randomPossibleCell(possibleCells);
  };
};

Computer.prototype.counterHorizontal = function(board) {
  for(var i = 0; i < board[1].length; i++){
    if(board[(i + 1)].instancesOf(game.players[1].piece.symbol) == 2){
      for(var j = 0; j < board[(i + 1)].length; j++){
        if(board[(i + 1)][j] == null){
          return [(i + 1), j];
        }
      }
    }
  }
  return false;
};

Computer.prototype.columniseBoard = function(board) {
  var columnisedBoard = {}
  for(var i = 0; i < board[1].length; i++){
    var column = []
    var counter = 0;
    for(var j = 0; j < board[1].length; j++){
      if (counter != 3){
        column.push(board[(j + 1)][i]);
        counter += 1
      };
    }
    columnisedBoard[(i + 1)] = column;
  }
  return columnisedBoard;
}; // does this function belong here or in the board model?


Computer.prototype.counterVertical = function(board) {
  for(var i = 0; i < board[1].length; i++){
    if(board[(i + 1)].instancesOf(game.players[1].piece.symbol) == 2){
      for(var j = 0; j < board[(i + 1)].length; j++){
        if(board[(i + 1)][j] == null){
          return [(j + 1), i];
        }
      }
    }
  }
  return false;
};