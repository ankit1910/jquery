$(document).ready(function(){
  var blog =  $('#blog h3');
  blog.after('<div class="blog"></div>');
  showBlog(blog);
})
//function to show the blog part on clicking the heading..
function showBlog(blog){
  blog.bind("click", function(e){
    e.preventDefault();
    var refrence = ($(this).children('a').attr('href')).split('');
    var refrence = refrence[refrence.length-1];
    ($(this).siblings("div")).load('http://localhost.com/jquery/exercises/loadExternal/data/blog.html #post' + refrence );
  })
}
