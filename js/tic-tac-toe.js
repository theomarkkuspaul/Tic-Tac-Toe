$(document).ready(function(event){

  game = new Game

  $('.cell-square').on('click', function(event){
    // debugger;
    var $target = $(event.target);
    var cellNum, rowNum, coors;
    cellNum = $target.attr('id')[4];
    rowNum = $target.parent().parent().parent().attr('id')[3];
    coors = game.board.cellCoordinates(rowNum, game.board.findCellIndexNum(rowNum, cellNum));
    game.board.strikeCell(coors, new Nought);
    $target.css('background-color', game.pieces[1].color);
    game.board.performChecks(rowNum, cellNum, coors);
  });

});
