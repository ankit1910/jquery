$(function(){
  $('#specials').append('<div id="outputs"></div>');
  $('li.buttons').remove();
  var jsonObj = {};
  $('#specials select').one("change", function(){
    var that = $(this);
    $.ajax({
      url: "data/specials.json",
      dataType: 'json',
      success: function(data){
        jsonObj = data;
        var input = that.val();
        dispJson(jsonObj, input);
      }
    })
    $('#specials select').bind("change", function(e){
      var input = $(this).val();
      dispJson(jsonObj, input);
    })
  })
})
//function to show the div part on clicking the option..
var dispJson = function(jsonObj, input){
  if(input){
    var key = jsonObj[input];
    $('#outputs').html(key.title + "<p>" + key.text + "</p>")
                 .attr('style', 'color:' + key.color)
                 .append('<p><img src="../loadJson' + key.image + '" /></p>');
  }
  else{
    $('#outputs').html("");
  }
}
