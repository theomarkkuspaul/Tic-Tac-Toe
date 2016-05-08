
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
  debugger;
};