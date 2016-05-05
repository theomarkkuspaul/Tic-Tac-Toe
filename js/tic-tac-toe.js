$(document).ready(function(event){

  board = new Board

  $('.cell-square').on('click', function(event){
    // event.preventDefault();
    var $target = $(event.target);
    var cellNum, rowNum;

    cellNum = $target.attr('id')[4];
    rowNum = $target.parent().parent().parent().attr('id')[3];
  });

});
