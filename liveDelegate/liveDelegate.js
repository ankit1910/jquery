$(document).ready(function(){
  var count = 1;
  $('#add').click(function(){
    $('#container').append('<div alt="removable" id="innerdiv' + count + '"></div>')
                   .find('#innerdiv' + count +'').text("div no" + (count++) + "")
                                                 .attr('style', 'border: solid 1px; height: 60px');
  })
  $('#container').delegate('div[alt="removable"]', 'click', function(){
    if($(this).is(':last-child')){
      $(this).remove();
      count--;
    }
    $(this).addClass('highlight');
  })
})
