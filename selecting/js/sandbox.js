$(document).ready(function() {
  //1 Select all of the div elements that have a class of "module".
	alert("there are " + $('div.module').length + " div elements that have a class of 'module'");
  //2 Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?
  var myList = $('#myList li');
  alert("third item in list using child index selector type\n" + $(myList[2]).html());
  alert("third item in list using tag and id desendant selector type\n" + $('ul #myListItem').html());
  alert("third item in list using direct id selector type\n" + $('#myListItem').html() + "\n this is the best type for selectting as it will save time for searching in nodes");
  //3 Select the label for the search input using an attribute selector.
  alert($('label[for="q"]').html());
  //4 Figure out how many elements on the page are hidden
  alert("number of hidden elements: " + $(':hidden').length);
  $(':hidden').each(function(){
    $(this).show();
  });
  //5 Figure out how many image elements on the page have an alt attribute.
  alert("no of image elements that have alt attribute " + $('img[alt]').length);
  //6 Select all of the odd table rows in the table body.
  alert("odd rows of the tables are");
  $('tr:odd').each(function(){
    alert($(this).html());
  });
});
