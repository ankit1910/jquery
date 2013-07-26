$(document).ready(function(){
  var blog =  $('#blog h3');
  blog.each(function(index){
    var divId = 'blog'+index ;
  	$(this).after('<div class="blog" id="' + divId + '"></div>')
  	       .data("divId",divId);
  	})
  showBlog(blog);
})
//function to show the blog part on clicking the heading..
var showBlog = function(blog){
  blog.bind("click", function(e){
    e.preventDefault();
    var refrence = $(this).children('a').attr('href').replace('#', ' #');
    $('#' + $(this).data("divId")).load('data/'+ refrence );
  })
}
