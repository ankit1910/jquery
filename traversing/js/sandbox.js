$(function(){
  // 1. Select all of the image elements on the page; log each image's alt attribute.
  $('img').each(function(){
    var disp = $(this).attr('alt');
    console.log(disp)
  })
  // 2. Select the search input text box, then traverse up to the form and add a class to the form.
  $('#q').parent().addClass('hint');
  console.log("class added label color changed to grey");
  // 3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
  $('li.current').removeClass("current")
                 .next().addClass("current");
  console.log("class has changed");
  // 4. Select the select element inside #specials; traverse your way to the submit button.
  var valueButton = $('#specials select:first').parent().next().children().val();
  console.log("traversed to the submit button its value is " + valueButton);
  // 5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
  $('#slideshow li:first-child').addClass("current")
                                .siblings().addClass("disabled");
  console.log("class has changed");
})
