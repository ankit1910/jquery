$(document).ready(function(){
  var blog =  $('#blog h3');
  blog.each(function(index){
  	$(this).after('<div class="blog" id="blog'+ index +'"></div>')
  	       .data("divId",'blog'+index);
  	})
  showBlog(blog);
})
//function to show the blog part on clicking the heading..
var showBlog = function(blog){
  blog.bind("click", function(e){
    e.preventDefault();
    var refrence = ($(this).children('a').attr('href')).split('');
    var refrence = refrence[refrence.length-1];
    $('#' + $(this).data("divId")).load('data/blog.html #post' + refrence );
  })
}
