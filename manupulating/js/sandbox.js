$(document).ready(function() {
  //1. Add five new list items to the end of the unordered list #myList.
  var myList = $('#myList');
  for(var i = 1; i < 6 ; i++){
    myList.append("<li>Appended item'" + i + "'</li>");
  }
  alert("child appended");
  //2. Remove the odd list items
  $('#myList li:odd').remove();
  alert("odd list items removed");
  //3. Add another h2 and another paragraph to the last div.module
  $('div.module').last().prepend("<h2>heading tag appended</h2><p>new paragraph appended</p>");
  alert("paragraph and h2 appended");
  //4. Add another option to the select element; give the option the value "Wednesday"
  $('select[name="day"]').append("<option>wednesday</option>")
  alert("option wednesday appended");
  //5.Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $('div.module').last().after("<div class='module'></div>");
  $('div.module').last().append('<img src="images/fruit.jpg" alt="new image" />');
  alert("new div appended");
})
