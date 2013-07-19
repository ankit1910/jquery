var slideshow = $('#slideshow');
var len = slideshow.children("li").length, i = 0;
$(document).ready(function(){
  $('body').prepend(slideshow);
  slideshow.children('li').hide();
  $(slideshow).after("<div id='description' class='current'></div>");
  fadeInOut();
})
//function to display the slide show..
function fadeInOut(){
  var image = $('#slideshow li:eq('+ (i++) +')');
  $('#description').html("(there are total '" + len + "' images: )" + "\n" + " And you are viewing '" + image.children("h2").text() + "'.");
  image.fadeIn(1000).delay(1000).fadeOut(1000);
  if(i == len){
    i = 0;
  }
  //repeating the next image after particular time..
  setTimeout(fadeInOut,3000);
}
