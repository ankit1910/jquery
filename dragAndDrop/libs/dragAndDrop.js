$(function(){
  //making list item with class 'item' dragable
  $(".item").draggable({
    helper: 'clone',
    start: function(){
      $(this).closest('div').addClass('highlight');
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
      if(itemDrop.hasClass('dropable')){
        $(this).removeClass('highlight')
               .find('ul').append(itemDrop);
        var list = $(this).find('li');
        list.sort(function(a, b){
          return ($(b).text()) < ($(a).text()) ? 1 : -1;
        }).appendTo($(this).find("ul"));
      }
    }
  });
});