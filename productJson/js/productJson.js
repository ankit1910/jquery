$(function(){
  var jsonObj = [];
  var filters = ['brand', 'color', 'sold_out'];
  $.ajax({
    url: "data/productJson.json",
    dataType: 'json',
    success: function(data){
      jsonObj = data;
      displayBlocks(jsonObj);
      $('.brand, .color, .sold_out').bind('change', function(){
        var blocks = $('#products img');
        blocks.show();
        for (var key in filters){
          blocks = Filter(blocks, filters[key]);
        }
      })
    }
  })
})
var Filter = function(blocks, filterType){
  if($('.' + filterType + ':checked').length != 0){
    blocks.hide();
    $('.' + filterType + '').each(function(){
      if($(this).prop('checked')){
        var value = $(this).val();
        blocks.filter('img[' + filterType + '="' + value + '"]').show();
      }
    })
  }
  return blocks.filter(':visible');
}
var displayBlocks = function(jsonObj){
  for(var i = 0; i < jsonObj.length; i++){
    $('#products').append('<img id ="img_' + i + '" class="prod" src="images/' + jsonObj[i].url + '" />');
    $('#img_' + i + '').attr({ color : jsonObj[i].color, brand : jsonObj[i].brand, sold_out : jsonObj[i].sold_out});
  }
}