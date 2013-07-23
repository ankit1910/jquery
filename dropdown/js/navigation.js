$(document).ready(function(){
  dropdown();
})
function dropdown(){
  $('#nav li').hover(function(){
    $(this).children("ul").toggleClass('hover');
  });
}
