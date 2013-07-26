var jsonWatch = {"titan"  :[{"name": "orion", "cost": 10000, "url": "images/titan.jpg"},{"name": "edge", "cost": 12000, "url": "images/titan.jpg"},{"name": "nebula", "cost": 8000, "url": "images/titan.jpg"},{"name": "saga", "cost": 18000, "url": "images/titan.jpg"}],
             "tissot" :[{"name": "couturier", "cost": 25000, "url": "images/tissot.jpg"},{"name": "flamingo", "cost": 18000, "url": "images/tissot.jpg"},{"name": "touch", "cost": 22000, "url": "images/tissot.jpg"},{"name": "classic", "cost": 16000, "url": "images/tissot.jpg"}],
             "tag"    :[{"name": "calliber", "cost": 85000, "url": "images/tag.jpg"},{"name": "carrera", "cost": 125000, "url": "images/tag.jpg"},{"name": "monaco", "cost": 400000, "url": "images/tag.jpg"}]
           }
$(function(){
  var watch = new watchKart();
  watch.displayWatch('All');
  $('body').delegate('#brand', 'change', function(){
    var brand = $('#brand option:selected').val();
    watch.displayWatch(brand);
  });
  $('body').delegate('#mycartTab', 'click',function(){
    $('#mycartTab').addClass('selected');
    $('#productTab').removeClass('selected');
    $('#mycartDiv').show();
    $('#productDiv').hide();
  })
  $('body').delegate('#productTab', 'click',function(){
    $('#mycartTab').removeClass('selected');
    $('#productTab').addClass('selected');
    $('#mycartDiv').hide();
    $('#productDiv').show();
  })
  $('body').delegate('#addToCart', 'click',function(){
    var id = $(this).closest('div').attr('id');
    watch.addToCart(id);
  })
  $('body').delegate('.remove', 'click', function(){
    var id = $(this).attr('id');
    watch.removeFromCart(id);
  })
  $('body').delegate('#checkout', 'click', function(){
    $('body').html("<h1>Thank you for shopping with watchKart :)</h1>")
  })
});
function watchKart(){
  var totalAmount = 0;
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
                  .closest('div').find('img').attr('src', jsonWatch[key][i].url)
                  .closest('div').find('#spanName').text(" watch: " + jsonWatch[key][i].name)
                  .closest('div').find('#spanPrice').text(" Price: Rs:" + jsonWatch[key][i].cost);
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
              .closest('div').find('img').attr('src', jsonWatch[brand][i].url)
              .closest('div').find('#spanName').text(" watch: " + jsonWatch[brand][i].name)
              .closest('div').find('#spanPrice').text(" Price: Rs:" + jsonWatch[brand][i].cost);
        $('#productContent').append(div);
      }
    }
  }
  this.addToCart = function(param){
    id = param.split("_");
    var product = jsonWatch[id[0]][id[1]].name;
    var price = jsonWatch[id[0]][id[1]].cost;
    var quantity = $('#'+ param + '').find('input').val();
    var subTotal = price*quantity;
    $('#'+ param+'').find('input').val("");
    if(/\d/.test(quantity)){
      $('#myCart').append('<tr><td>' + product + '</td><td>' + price + '</td><td>' + quantity + '</td><td>' + subTotal + '</td><td><button class="remove" id="button_' + param + '">Remove</button></td></tr>');
      totalAmount += subTotal;
      $('#total').val(totalAmount);
      $('#mycartTab').text('My Cart (' + ($('#myCart tr').length-1) + ')');
      $('#button_' + param +'').data("amountToReduce",subTotal);
    }
  }
  this.removeFromCart = function(param){
    var amountToReduce = $('#' + param + '').data("amountToReduce");
    $('#' + param + '').closest('tr').remove();
    totalAmount -= amountToReduce;
    $('#total').val(totalAmount);
  }
}
