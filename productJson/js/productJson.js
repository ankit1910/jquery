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
        blocks.hide();
        for (var key in filters){
          blocks = Filter(blocks, filters[key]);
        }
        blocks.show();
      })
    }
  })
})
var Filter = function(blocks, filterType){
  var selectorString = [];
  if($('.' + filterType + ':checked').length != 0){    
    $('.' + filterType + ':checked').each(function(){
      var value = $(this).val();
      selectorString.push('img[' + filterType + '="' + value + '"]');
    })
    selectorString.join(',');
    blocks = blocks.filter('' + selectorString + '');
  }
  return blocks;
}
var displayBlocks = function(jsonObj){
  for(var i = 0; i < jsonObj.length; i++){
    $('#products').append('<img id ="img_' + i + '" class="prod" src="images/' + jsonObj[i].url + '" />');
    $('#img_' + i + '').attr({ color : jsonObj[i].color, brand : jsonObj[i].brand, sold_out : jsonObj[i].sold_out});
  }
}