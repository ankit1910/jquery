$(document).ready(function(){
  jsonObj = [];
  $.ajax({
    url: "data/productJson.json",
    dataType: 'json',
    success: function(data){
      jsonObj = data;
      var filter = new JSONfilters();
      filter.displayBlocks(jsonObj);
      $('.brand, .color, #availablity').bind('change', function(){
        filter.brandColorFilter(jsonObj);
      })
    }
  })
});
function JSONfilters(){
  this.brandColorFilter = function(jsonObj){
    JSONBrandColor = [] ;
    $('.brand, .color').each(function(){
      if((this).checked){
        for(var i = 0; i < jsonObj.length; i++){
          if($(this).attr('id') == jsonObj[i].brand || $(this).attr('id') == jsonObj[i].color){
            JSONBrandColor.push(jsonObj[i]);
          }
        }
      }
    })
    if($('.brand:checked').length ==  0 && $('.color:checked').length == 0){
      JSONBrandColor = jsonObj.concat(jsonObj);
    }
    else if($('.brand:checked').length ==  0 || $('.color:checked').length == 0){
      JSONBrandColor = JSONBrandColor.concat(jsonObj);
    }
    this.uniqueBlocks(JSONBrandColor);
  }// to remove the duplicate blocks using reverse bubble sort.
  this.uniqueBlocks = function(JSONBrandColor){
    JSONdisplay = [];
    for(var i = 0; i < JSONBrandColor.length; i++){
      for (var j = (i+1); j < JSONBrandColor.length; j++){
        if(JSONBrandColor[i].name == JSONBrandColor[j].name){
          JSONdisplay.push(JSONBrandColor[i]);
        }
      }
    }
    if($('#availablity').attr('checked')){
      this.availableProducts(JSONdisplay);
    }
    else{
      this.displayBlocks(JSONdisplay);
    }
  }//this function to find the available products.
  this.availableProducts = function(JSONdisplay){
    for(var i = 0; i < JSONdisplay.length; i++){
      if(JSONdisplay[i].sold_out == 1){
        JSONdisplay.splice(i,1);
        i=i-1;
      }
    }
    this.displayBlocks(JSONdisplay);
  }//this function to display the block
  this.displayBlocks = function(jsonObj){
    $('#products').empty();
    for(var i = 0; i < jsonObj.length; i++){
      $('#products').append('<img class="prod" src="images/' + jsonObj[i].url + '" />');
    }
  }
}
