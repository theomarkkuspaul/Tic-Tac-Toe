$(document).ready(function(event){


  $('#commence').on('click', function(event){
    event.preventDefault();
    var $target = $(event.target)
    $target.hide();
    game = new Game

    $('.cell-square').on('click', function(event){
      var $target = $(event.target);
      var cellNum, rowNum, coors;
      cellNum = $target.attr('id')[4];
      rowNum = $target.parent().parent().parent().attr('id')[3];
      coors = game.board.cellCoordinates(rowNum, game.board.findCellIndexNum(rowNum, cellNum));
      if(game.board.strikeCell(coors, game.turn.symbol)){
        game.board.performChecks(rowNum, cellNum, coors, game.turn.symbol);
        $target.css('background-color', game.turn.color);
        game.switchTurn();
      };

    });
  });
});
