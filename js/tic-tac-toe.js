$(document).ready(function(event){


  $('#start-button').on('click', function(event){
    event.preventDefault();
    var $startButton = $(event.target)
    $startButton.hide();
    game = new Game


    $('.cell-square').on('click', function(event){

      if(game.winner == null){

        var $cellTarget = $(event.target);
        var cellNum, rowNum, coors;
        cellNum = $cellTarget.attr('id')[4];
        rowNum = $cellTarget.parent().parent().parent().attr('id')[3];
        coors = game.board.cellCoordinates(rowNum, game.board.findCellIndexNum(rowNum, cellNum));
        if(game.board.strikeCell(coors, game.turn.piece.symbol)){
          $cellTarget.addClass("" + game.turn.playerType + "")

          if(game.board.performChecks(rowNum, cellNum, coors, game.turn.piece.symbol)){
            $('.cell-square').removeClass('computer');
            $('.cell-square').addClass('human');
            game.endGame(game.turn);
            return true;
          };

        } else {
          return;
        }
        game.switchTurn();


        var setTimeoutId = setTimeout(function(){
          //computerrrrr logique
          var possibleCells = game.turn.possibleCells(game.board.board);
          var randomCellCoors = game.turn.randomPossibleCell(possibleCells);
          var compRowNum = randomCellCoors[0];

          game.board.strikeCell(randomCellCoors, game.turn.piece.symbol);
          var computerCell = game.board.convertCoorsToCellNum(randomCellCoors);
          $('#cell' + computerCell).addClass("" + game.turn.playerType + "")
          if(game.board.performChecks(compRowNum, computerCell,  randomCellCoors, game.turn.piece.symbol)) {
            $('.cell-square').removeClass('computer');
            $('.cell-square').addClass('computer');
            game.endGame(game.turn);
          }

          game.switchTurn();

          clearTimeout(setTimeoutId);
      }, 1000);
      }
    });
  });
});
