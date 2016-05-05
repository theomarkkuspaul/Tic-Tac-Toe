
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
  this.board[cellCoors[0]][cellCoors[1]] = type
};