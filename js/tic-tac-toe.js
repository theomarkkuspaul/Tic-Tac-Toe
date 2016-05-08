$(document).ready(function(event){


  $('#commence').on('click', function(event){
    event.preventDefault();
    var $target = $(event.target)
    $target.hide();
    game = new Game
    // debugger;


    $('.cell-square').on('click', function(event){

      if(game.winner == null){

        var $newTarget = $(event.target);
        var cellNum, rowNum, coors;
        cellNum = $newTarget.attr('id')[4];
        rowNum = $newTarget.parent().parent().parent().attr('id')[3];
        coors = game.board.cellCoordinates(rowNum, game.board.findCellIndexNum(rowNum, cellNum));
        if(game.board.strikeCell(coors, game.turn.piece.symbol)){ //do I need cellNUm here?
          $newTarget.css('background-color', game.turn.piece.color);
          if(game.board.performChecks(rowNum, cellNum, coors, game.turn.piece.symbol)){
            game.endGame(game.turn)
            $('a').addClass('finished')
            debugger;
            return true;
          };
        };
        game.switchTurn();

        //computerrrrr logique
        var possibleCells = game.turn.possibleCells(game.board.board);
        var randomCellCoors = game.turn.randomPossibleCell(possibleCells);
        var compRowNum = randomCellCoors[0]

        game.board.strikeCell(randomCellCoors, game.turn.piece.symbol)
        var computerCell = game.board.convertCoorsToCellNum(randomCellCoors)
        $('#cell' + computerCell).css('background-color', 'blue')
        // debugger;
        if(game.board.performChecks(compRowNum, computerCell, randomCellCoors, game.turn.piece.symbol)){
            game.endGame(game.turn)
          };

        game.switchTurn();
      } else {



      }

    });
  });
});
