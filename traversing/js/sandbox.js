$(document).ready(function() {
  // 1. Select all of the image elements on the page; log each image's alt attribute.
  var disp = "";
  $('img').each(function(){
    disp += this.alt;
    disp += "\n";
  })
  alert("image's alt attribute\n" + disp);
  // 2. Select the search input text box, then traverse up to the form and add a class to the form.
  alert("form html\n" + $('input.input_text').parent().html());
  // 3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
  $('#myList li').each(function(){
    if($(this).hasClass("current")){
      $(this).removeClass("current");
      $(this).next().addClass("current");
      return false;
    }
  })
  alert("class has changed");
  // 4. Select the select element inside #specials; traverse your way to the submit button.
  alert("traversing to the submit\n" + $('#specials select[name="day"]').parent().next().children().val());
  // 5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
  $('#slideshow li:first-child').addClass("current");
  $('#slideshow li:not(:first-child)').addClass("disabled");
  alert("class has changed");
})
