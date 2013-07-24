$(document).ready(function(){
  $('#specials').append('<div id="outputs"></div>');
  retrieveJson();
})
//function to show the div part on clicking the option..
function retrieveJson(){
  var jsonObj = {};
  $.ajax({
    url: "data/specials.json",
    dataType: 'json',
    success: function(data){
      jsonObj = data;
    }
  })
  $('#specials select').bind("change", function(e){
    var input = $(this).val();
    $('li.buttons').remove();
    var key = jsonObj[input];
    $('#outputs').html(key.title + "<p>" + key.text + "</p>")
                 .attr('style', 'color:' + key.color)
                 .append('<p><img src="../loadJson' + key.image + '" /></p>');
  })
}
