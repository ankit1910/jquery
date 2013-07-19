$(document).ready(function(){
  dropdown();
})
function dropdown(){
  $('#nav li').hover(function(){
    $(this).toggleClass('hover').children("ul").slideToggle(10);
  })
}
