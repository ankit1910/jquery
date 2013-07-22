$(function(){
  //making list item with class 'item' dragable 
  $(".item").draggable({helper: 'clone'});
  //making first and second box dropable..
  $("#second_box, #first_box").droppable({
    accept: '.item',
    drop: function(event, ui){
      var itemDrop = $(ui.draggable);
      $(this).find('ul').append(itemDrop);
    }
  });
});