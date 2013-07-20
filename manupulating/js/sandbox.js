$(document).ready(function(){
  //1. Add five new list items to the end of the unordered list #myList.
  var itemToAdd = 5
  var myList = $('#myList');
  for(var i = 1; i <= itemToAdd ; i++){
    myList.append("<li>Appended item'" + i + "'</li>");
  }
  //2. Remove the odd list items
  $('#myList li:odd').remove();
  //3. Add another h2 and another paragraph to the last div.module
  divHeading = "heading tag appended";
  divParagraph = "paragraph tag appended";
  $('div.module:last').prepend("<h2>" + divHeading + "</h2><p>" + divParagraph + "</p>");
  //4. Add another option to the select element; give the option the value "Wednesday"
  optionValue = "Wednesday";
  $('select[name="day"]').append("<option value='" + optionValue +"'>Wednesday</option>")
  //5.Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  var imageSrc = $("img[alt]").attr("src");
  $("<div class='module'></div>").insertAfter($('div.module:last'))
                                 .append('<img src="' + imageSrc + '" />');
})
