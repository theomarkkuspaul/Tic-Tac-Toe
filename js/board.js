
var Board = function(){
  this.board = {1:[0,0,0],
         2:[0,0,0],
         3:[0,0,0]}
  // this.lastRow =
}

Board.prototype.findCellIndexNum = function(rowNum, cellNum){
  return cellNum - ((parseInt(rowNum) - 1) * 3) - 1;
};

Board.prototype.cellCoordinates = function(rowNum, cellIndexNum) {
  var row;
  row = parseInt(rowNum);
  return [row, cellIndexNum];
};

Board.prototype.strikeCell = function(cellCoors, type) {
  if(this.checkCellAvailability(cellCoors)){
    alert('Already taken');
  } else {
    this.board[cellCoors[0]][cellCoors[1]] = type;
  };
};

Board.prototype.checkCellAvailability = function(cellCoors) {
  if(this.board[cellCoors[0]][cellCoors[1]] == 'X' || this.board[cellCoors[0]][cellCoors[1]] == 'O'){
    return true;
  } else {
    false;
  };
};
