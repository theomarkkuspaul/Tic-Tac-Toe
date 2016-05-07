$(document).ready(function(event){

  board = new Board

  $('.cell-square').on('click', function(event){
    // event.preventDefault();
    var $target = $(event.target);
    var cellNum, rowNum, coors;

    cellNum = $target.attr('id')[4];
    rowNum = $target.parent().parent().parent().attr('id')[3];
    coors = board.cellCoordinates(rowNum, board.findCellIndexNum(rowNum, cellNum));
    board.strikeCell(coors, board.piece);
    board.checkVertical(coors);

    // board.performChecks(rowNum, cellNum, coors);
    $target.css('background-color', 'red');
  });

});
