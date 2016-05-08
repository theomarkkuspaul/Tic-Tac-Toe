$(document).ready(function(event){


  $('#commence').on('click', function(event){
    event.preventDefault();
    var $target = $(event.target)
    $target.hide();
    game = new Game
    // debugger;


    $('.cell-square').on('click', function(event){

      var $newTarget = $(event.target);
      var cellNum, rowNum, coors;
      cellNum = $newTarget.attr('id')[4];
      rowNum = $newTarget.parent().parent().parent().attr('id')[3];
      coors = game.board.cellCoordinates(rowNum, game.board.findCellIndexNum(rowNum, cellNum));

      if(game.board.strikeCell(coors, game.turn.piece.symbol)){
        $newTarget.css('background-color', game.turn.piece.color);
        if(game.board.performChecks(rowNum, cellNum, coors, game.turn.piece.symbol)){
          game.endGame(game.turn)
        };
      };
      game.switchTurn();

      //computerrrrre
      game.turn.possibleCells(game.board.board)
    });
  });
});
