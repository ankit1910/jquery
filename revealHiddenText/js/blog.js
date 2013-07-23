$(document).ready(function(){
  $('#blog').delegate('a', 'click', function(e){
    e.preventDefault();
    $('p.excerpt').slideUp('slow');
    $(this).parent().next().slideDown('slow');
  });
});

