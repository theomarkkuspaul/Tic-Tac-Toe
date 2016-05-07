
var Board = function(){
  this.board = {
        1:[0,0,0],
        2:[0,0,0],
        3:[0,0,0]},
  this.piece = 'X',
  this.completedRow = ["X","X","X"]
}

//rotates array left
Array.prototype.rotate = function(){
  var shifted = this.shift();
  this.push(shifted)
}

// Compare two arrays for compatability
Array.prototype.equals = function(array){

// If the compared array is a falsey value then return false
  if( !array){
    return false;
  };

// Make sure array lengths are the same
  if(this.length != array.length){
    return false;
  };

// iterate through arrays and compare if each element inside of them match
  for(var i = 0; i < this.length; i++){
    if(this[i] != array[i]){
      console.log('Did not compare, but do not despair');
      return false;
    };
  };

// everything before this point tries to prove that the arrays do not match
  return true;
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
  } else {
    this.board[cellCoors[0]][cellCoors[1]] = piece;
  };
};

Board.prototype.checkCellAvailability = function(cellCoors) {
  if(this.board[cellCoors[0]][cellCoors[1]] == 'X' || this.board[cellCoors[0]][cellCoors[1]] == 'O'){
    return true;
  } else {
    false;
  };
};

Board.prototype.performChecks = function(rowNum, cellNum, coors) {
  this.checkDiagonal()
  // if(this.checkHorizontal(rowNum) || this.checkVertical(coors)){
    // console.log('we have a winner');
  // };
};

Board.prototype.checkHorizontal = function(rowNum){
// compare row 'n' at certain point in time to see if it matches the completed board
  if(this.board[rowNum].equals(this.completedRow)){
    return true;
  };
  return false;
};

Board.prototype.column = function(coors) {
  var column = []
  for(var i = 0; i < this.board[coors[0]].length; i++){
    column.push(this.board[(i + 1)][coors[1]])
  };
  return column
};

Board.prototype.checkVertical = function(coors) {
  if(this.column(coors).equals(this.completedRow)){
    return true;
  };
  return false;
};

Board.prototype.checkDiagonal = function() {
  debugger;
  this.board[1].rotate();
  debugger;
};