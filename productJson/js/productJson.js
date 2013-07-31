$(document).ready(function(){
  var jsonObj = [];
  var filterClassArray = ['.brand', '.color', '.available'];
  $.ajax({
    url: "data/productJson.json",
    dataType: 'json',
    success: function(data){
      jsonObj = data;
      var filter = new JSONfilters();
      filter.displayBlocks(jsonObj);
      $('.brand, .color, .available').bind('change', function(){
        var blocks = $('#products').find('img');
        filter.Filter(blocks, filterClassArray);
      })
    }
  })
});
function JSONfilters(){
  this.Filter = function(blocks, filterClassArray){
    for(var i = 0; i < filterClassArray.length; i++){
      $(blocks).hide();
      if($('' + filterClassArray[i] + ':checked').length == 0){
        $(blocks).show();
      }
      else{
        $(filterClassArray[i]).each( function(){
          var that = this;
          if(($(that).prop('checked'))){
            $(blocks).each( function(){
              if($(that).attr('id') == $(this).data('filterData').brand || $(that).attr('id') == $(this).data('filterData').color || $(that).attr('id') == $(this).data('filterData').sold_out){
                $(this).show();
              }
            })
          }
        })
      }
      blocks = $(blocks).filter(':visible');
    }
  }
  this.displayBlocks = function(jsonObj){
    $('#products').empty();
    for(var i = 0; i < jsonObj.length; i++){
      $('#products').append('<img id ="img_' + i + '" class="prod" src="images/' + jsonObj[i].url + '" />');
      $('#img_' + i + '').data("filterData", { color : jsonObj[i].color, brand : jsonObj[i].brand, sold_out : jsonObj[i].sold_out});
    }
  }
}