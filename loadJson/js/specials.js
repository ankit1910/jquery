$(function(){
  $('#specials').append('<div id="outputs"></div>');
  $('li.buttons').remove();
  var jsonObj = {};
  $('#specials select').one("mousedown", function(){
    $.ajax({
      url: "data/specials.json",
      dataType: 'json',
      success: function(data){
        jsonObj = data;
        dispJson(jsonObj);
      }
    })
  })  
});
//function to show the div part on clicking the option..
function dispJson(jsonObj){
  $('#specials select').bind("mouseup", function(e){
    var input = $(this).val();
    if(input){   
      var key = jsonObj[input];
      $('#outputs').html(key.title + "<p>" + key.text + "</p>")
                   .attr('style', 'color:' + key.color)
                   .append('<p><img src="../loadJson' + key.image + '" /></p>');
    }
  })
}
