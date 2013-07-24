$(function(){
  var $slideshow = $('#slideshow');
  var len = $slideshow.children("li").length, i = 0;
  $('body').prepend("<div id='picture' style='width:900px; height:390px'></div>")
           .children('#picture').prepend($slideshow);
  $slideshow.children('li').hide()
                           .parent().after("<div id='description' class='current'></div>");
  fadeInOut(len, i);
})
//function to display the slide show..
function fadeInOut(len, i){
  var image = $('#slideshow li:eq('+ (i++) +')');
  $('#description').html("(there are total '" + len + "' images: )" + "\n" + " And you are viewing '" + image.children("h2").text() + "'.");
  image.fadeIn(1000).delay(1000).fadeOut(1000);
  if(i == len){
    i = 0;
  }
  //repeating the next image after particular time..
  setTimeout(function(){fadeInOut(len,i)},3002);
}
