$(function(){
  //making list item with class 'item' dragable
  $(".item").draggable({
    helper: 'clone',
    start: function(){
      $(this).closest('div').addClass('highlight sourceContainer');
    },
    drag: function(){
      $(this).addClass('selected');
    },
    stop: function(){
      $('#second_box, #first_box').removeClass('notAccept');
      $(this).removeClass('selected')
             .closest('div').removeClass('highlight');
    }
  });
  //making first and second box dropable..
  $("#second_box, #first_box").droppable({
    out: function(){
      $(this).removeClass('highlight notAccept');
    },
    over: function(even, ui){
      var itemDrop = $(ui.draggable);
      if(itemDrop.hasClass('dropable')){
        $(this).addClass('highlight');
      }
      else{
        $(this).addClass('notAccept');
      }
    },
    drop: function(event, ui){
      var itemDrop = $(ui.draggable);
      if(itemDrop.hasClass('dropable') && !$(this).hasClass('sourceContainer')){
        $(this).removeClass('highlight')
               .find('ul').append(itemDrop);
        var list = $(this).find('li');
      }
      $("#second_box, #first_box").removeClass('sourceContainer');
    }
  });
});