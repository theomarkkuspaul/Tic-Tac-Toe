
var Board = function(){
  this.board = {
        1:[null,null,null],
        2:[null,null,null],
        3:[null,null,null]},
  this.completedCrossRow = ['X','X','X'],
  this.completedNoughtRow = ['O','O','O']
}

Board.prototype.findCellIndexNum = function(rowNum, cellNum){
  return cellNum - ((parseInt(rowNum) - 1) * 3) - 1;
};

Board.prototype.cellCoordinates = function(rowNum, cellIndexNum) {
  var row;
  row = parseInt(rowNum);
  return [row, cellIndexNum];
};

Board.prototype.strikeCell = function(cellCoors, piece) {
  if(this.checkCellAvailability(cellCoors)){
    alert('Already taken');
    return false;
  } else {
    this.board[cellCoors[0]][cellCoors[1]] = piece
    return true
  };
};

Board.prototype.checkCellAvailability = function(cellCoors) {
  if(this.board[cellCoors[0]][cellCoors[1]] == 'X' || this.board[cellCoors[0]][cellCoors[1]] == 'O'){
    return true;
  } else {
    false;
  };

};

Board.prototype.performChecks = function(rowNum, cellNum, coors, symbol) {

  if(this.checkHorizontal(rowNum) || this.checkVertical(coors) || this.checkDiagonal(symbol)){
    console.log("Player " + game.turn.name + " wins!");
    return true
  };
};

Board.prototype.checkHorizontal = function(rowNum){
// compare row 'n' at certain point in time to see if it matches the completed board
  // debugger;
  if(this.board[rowNum].equals(this.completedCrossRow)){
    return true;
  };
  if(this.board[rowNum].equals(this.completedNoughtRow)){
    return true;
  }
  return false;
};

Board.prototype.column = function(coors) {
  var column = []
  for(var i = 0; i < this.completedCrossRow.length; i++){
    column.push(this.board[(i + 1)][coors[1]])
  };
  return column
};

Board.prototype.checkVertical = function(coors) {
  if(this.column(coors).equals(this.completedCrossRow)){
    return true;
  };

  if(this.column(coors).equals(this.completedNoughtRow)){
    return true;
  };
  return false;
};


Board.prototype.checkDiagonal = function(symbol) {
//   //copy current playing board to test for three in a row
//   var copyBoard = {}
//   var totalRotates = 0
//   for(var i = 0; i < 3; i++){
//     //create a copy of the row that the counter was placed on
//     var copyRow = this.board[(i + 1)].slice()
//     // rotate the copied row to the first index
//     // debugger;
//     if(this.board[(i + 1)].includes(symbol)){
//       while(copyRow.indexOf(symbol) != 0){
//         copyRow.rotate();
//         //rotate until index zero equals the symbol
//         totalRotates += 1
//       };
//     };
//     copyBoard[(i + 1)] = copyRow
//   };

//   //* lines above could be placed in a new function for better readability


// // *this logic needs rethinking3
//   for(var i = 0; i < 3; i++){
//     if(copyBoard[(i + 1)][0] != symbol){
//       return false;
//     };
//   };

//   if(totalRotates == 1){
//     if(this.board[1][0] == symbol && this.board[1][2] == symbol){
//       return true;
//     } else{
//       debugger;
//       return false;
//     }
//   }

//   if(totalRotates == 3){
//     if(this.board[1][0] == symbol && this.board[2][1] == symbol){
//       return true;
//     } else{
//       return false
//     };
//   };

  if(this.board[2][1] == symbol){
    if (this.board[1][0] == symbol && this.board[3][2] == symbol){
      return true;
    } else if(this.board[3][0] == symbol && this.board[1][2] == symbol){
      return true;
    };
    return false;
  };
  return false;
};

Board.prototype.convertCoorsToCellNum = function(coors){
  if(coors[0] == 1){
    if(coors[1] == 0){
      return 1
    } else if(coors[1] == 1){
      return 2
    } else {
      return 3
    };
  } else if(coors[0] == 2){
    if(coors[1] == 0){
      return 4
    } else if(coors[1] == 1){
      return 5
    } else {
      return 6
    }
  } else {
    if(coors[1] == 0){
      return 7
    } else if(coors[1] == 1){
      return 8
    } else {
      return 9
    };
  };
};