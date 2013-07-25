jsonWatch = {"titan"  :[{"name": "orion", "cost": 10000},{"name": "edge", "cost": 12000},{"name": "nebula", "cost": 8000},{"name": "saga", "cost": 18000}],
             "tissot" :[{"name": "couturier", "cost": 25000},{"name": "flamingo", "cost": 18000},{"name": "touch", "cost": 22000},{"name": "classic", "cost": 16000}],
             "tag"    :[{"name": "calliber", "cost": 85000},{"name": "carrera", "cost": 125000},{"name": "monaco", "cost": 400000}]
           }
var totalAmount = 0;
$(function(){
  var watch = new watchKart();
  watch.displayWatch('All');
  $('body').delegate('#brand', 'change', function(){
    var brand = $('#brand option:selected').val();
    watch.displayWatch(brand);
  });
  $('body').delegate('#mycartTab', 'click',function(){
    $('#mycartTab, #productTab').toggleClass('selected');
    $('#mycartDiv').show();
    $('#productDiv').hide();
  })
  $('body').delegate('#productTab', 'click',function(){
    $('#mycartTab, #productTab').toggleClass('selected');
    $('#mycartDiv').hide();
    $('#productDiv').show();
  })
  $('body').delegate('#addToCart', 'click',function(){
    var id = $(this).parent().attr('id');
    watch.addToCart(id);
  })
  $('body').delegate('.remove', 'click', function(){
    var id = $(this).attr('id');
    watch.removeFromCart(id);
  })
});
function watchKart(){
  this.displayWatch = function(brand){
    $('#productTab').addClass('selected');
    $('#productContent div').remove();
    if(brand == 'All'){
      var key;
      for (key in jsonWatch){
        if (jsonWatch.hasOwnProperty(key)){
          for(var i = 0; i < jsonWatch[key].length; i++){
            var div = $('#sample').clone();
            $(div).attr('id',key + "_" +i)
                  .find('#spanBrand').text(" brand: " + key)
                  .parent().find('#spanName').text(" watch: " +jsonWatch[key][i].name)
                  .parent().find('#spanPrice').text(" Price: Rs:" +jsonWatch[key][i].cost);
            $('#productContent').append(div);
          }
        }
      }
    }
    else{
      var brand = brand.toLowerCase();
      for(var i = 0; i < jsonWatch[brand].length; i++){
        var div = $('#sample').clone();
        $(div).attr('id',brand + "_" +i)
              .find('#spanBrand').text(" brand: " + brand)
              .parent().find('#spanName').text(" watch: " + jsonWatch[brand][i].name)
              .parent().find('#spanPrice').text(" Price: Rs:" + jsonWatch[brand][i].cost);
        $('#productContent').append(div);
      }
    }
  }
  this.addToCart = function(param){
    id = param.split("_");
    console.log(id);
    var product = jsonWatch[id[0]][id[1]].name;
    var price = jsonWatch[id[0]][id[1]].cost;
    var quantity = $('#'+ param + '').find('input').val();
    var subTotal = price*quantity;
    $('#'+ param+'').find('input').val("");
    if(/\d/.test(quantity)){
      $('#myCart').append('<tr><td>' + product + '</td><td>' + price + '</td><td>' + quantity + '</td><td>' + subTotal + '</td><td><button class="remove" id="button_' + param + '">Remove</button></td></tr>');
      $('#button_' + param +'').data("amountToReduce",subTotal);
      totalAmount += subTotal;
      $('#total').val(totalAmount);
    }
  }
  this.removeFromCart = function(param){
    var amountToReduce = $('#' + param + '').data("amountToReduce");
    $('#' + param + '').closest('tr').remove();
    totalAmount -= amountToReduce;
    $('#total').val(totalAmount);
  }
}
