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
    JSONcolor = [] ;
    $('.brand, .color').each(function(){
      if((this).checked){
        for(var i = 0; i < jsonObj.length; i++){
          if($(this).attr('id') == jsonObj[i].brand || $(this).attr('id') == jsonObj[i].color){
            JSONcolor.push(jsonObj[i]);
          }
        }
      }
    })
    if($('.brand:checked').length ==  0 || $('.color:checked').length == 0){
      JSONcolor = JSONcolor.concat(jsonObj);
    }
    this.uniqueBlocks(JSONcolor);
  }// to remove the duplicate blocks using reverse bubble sort.
  this.uniqueBlocks = function(JSONcolor){
    JSONdisplay = [];
    for(var i = 0; i < JSONcolor.length; i++){
      for (var j = (i+1); j < JSONcolor.length; j++){
        if(JSONcolor[i].name == JSONcolor[j].name){
          JSONdisplay.push(JSONcolor[i]);
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
