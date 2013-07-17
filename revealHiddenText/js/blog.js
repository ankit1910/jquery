$(document).ready(function(){
  clickBlog();
})
//function to slide down the blog content..
function clickBlog(){
  $('#blog a').bind('click', function(){
    $('p.excerpt').slideUp(0);
    $(this).attr('href', 'javascript:void(0)');
    $(this).parent().next().slideDown('slow');
  })
}
