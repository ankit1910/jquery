$(function(){
  var jsonWatch = {"titan"  :[{"name": "orion", "cost": 10000, "url": "images/titan.jpg"},{"name": "edge", "cost": 12000, "url": "images/titan.jpg"},{"name": "nebula", "cost": 8000, "url": "images/titan.jpg"},{"name": "saga", "cost": 18000, "url": "images/titan.jpg"}],
                   "tissot" :[{"name": "couturier", "cost": 25000, "url": "images/tissot.jpg"},{"name": "flamingo", "cost": 18000, "url": "images/tissot.jpg"},{"name": "touch", "cost": 22000, "url": "images/tissot.jpg"},{"name": "classic", "cost": 16000, "url": "images/tissot.jpg"}],
                   "tag"    :[{"name": "calliber", "cost": 85000, "url": "images/tag.jpg"},{"name": "carrera", "cost": 125000, "url": "images/tag.jpg"},{"name": "monaco", "cost": 400000, "url": "images/tag.jpg"}]
                  }
  var watch = new watchKart();
  var body = $('body');
  //initially display all watches;
  watch.displayAllWatch(jsonWatch);
  //event handler for brand change
  body.delegate('#brand', 'change', function(){
    var brand = $('#brand').val();
    watch.filterWatch(brand, jsonWatch);
  });
  //event handler for for tab clicks
  body.delegate('#mycartTab, #productTab', 'click',function(){
    $('.tab').removeClass('selected');
    $(this).addClass('selected');
    var divId = $(this).attr('id').replace('Tab', 'Div');
    $('#' + divId + '').show()
                       .siblings('div').hide();
  })
  //event handler for search button
  body.delegate('#searchButton', 'click', function(){
    var input = $('#search').val().trim();
    if(input != ''){
      watch.searchWatch(input,jsonWatch);
    }
  })
  //event handler for clear button
  body.delegate('#clearButton', 'click', function(){
    $('#search').val("");
    watch.filterWatch('all', jsonWatch);
  })
  //event handler for adding watches to cart.
  body.delegate('.addToCart', 'click',function(){
    var divId = $(this).closest('div').attr('id');
    buttonobj = $(this);
    watch.addToCart(divId, buttonobj);
  })
  //event handler for removing watches from cart
  body.delegate('.remove', 'click', function(){
    var id = $(this).attr('id');
    watch.removeFromCart(id);
  })
  //event handler for checkout buttons.
  body.delegate('#checkout', 'click', function(){
    $('body').html("<h1>Thank you for shopping with watchKart :)</h1><br><button id='shopAgain'>shop again</button>")
  })
  body.delegate('#shopAgain', 'click', function(){
    window.location.replace("watchkart.html");
  })
  //event handler for button buttons.
  body.delegate('.updateRow', 'focusout', function(){
    watch.updateRow($(this));
  })
});
var watchKart = function(){
  this.displayAllWatch =function(jsonWatch){
    var key;
    for (key in jsonWatch){
      if (jsonWatch.hasOwnProperty(key)){
        for(var i = 0; i < jsonWatch[key].length; i++){
          var div = $('#sample').clone();
          $(div).attr('id',key + "_" +i)
                .find('#spanBrand').text(key)
                .closest('div').find('img').attr('src', jsonWatch[key][i].url)
                .closest('div').find('#spanName').text(jsonWatch[key][i].name)
                .closest('div').find('#spanPrice').text(jsonWatch[key][i].cost);
          $('#productContent').append(div);
        }
      }
    }
  }
  this.filterWatch = function(brand, jsonWatch){
    var brand = brand.toLowerCase();
    if(brand == 'all'){
      $('.append').show();
    }
    else{
      $('.append').hide();
      for(var i = 0; i < jsonWatch[brand].length; i++){
        $('#' + brand +'_' + i + '').show();
      }
    }        
  }
  this.searchWatch = function(input, jsonWatch){
    var input = input.toLowerCase();
    $('.append').hide();
    if(input == 'all'){
      $('.append').show();
    }
    else{
      $('.append:contains(' + input + ')').show();
    }        
  }
  this.addToCart = function(param, obj){
    var product = obj.closest('div').find('#spanName').text();
    var price = obj.closest('div').find('#spanPrice').text();
    var quantity = obj.closest('div').find('input').val();
    var subTotal = price*quantity;
    var that = this;
    if(/\d/.test(quantity)){
      obj.closest('div').find('input[type="text"]').attr({'style': '', 'disabled' :true});
      obj.attr('disabled', 'true');
      $('#myCart').append('<tr><td>' + product + '</td><td name="price">' + price + '</td><td><input class="updateRow" id="update_' + param + '" maxlength="1" size="1" value="' + quantity + '" /></td><td name="subTotal">' + subTotal + '</td><td><button class="remove" id="button_' + param + '">Remove</button></td></tr>');
      this.updateCartValues();
    }
    else{
      obj.closest('div').find('input[type="text"]').attr('style', 'background-color:red;').val("");
    }
  }
   this.removeFromCart = function(param){
    divId = param.split("button_");
    divId = divId[1];
    $('#' + divId + '').find('button.addToCart').removeAttr('disabled');
    $('#' + divId + '').find('input[type="text"]').removeAttr('disabled').val("");
    $('#' + param + '').closest('tr').remove();
    this.updateCartValues();
  }
  this.updateCartValues = function(){
    var item = ($('#myCart tr').length-1);
    if (item == 0){
      $('#mycartTab').text('My Cart');
    }
    else{
      var totalAmount = 0;
      $('#mycartTab').text('My Cart (' + item + ')');
      $('td[name="subTotal"]').each(function(){
        totalAmount += parseInt($(this).text());
      })
      $('#total').val(totalAmount);
    }
  }
  this.updateRow = function(updateId){
    var tr = $(updateId.closest('tr'));
    var price = tr.find('td[name="price"]').text();
    var quantity =tr.find('input').val();
    if(/\d/.test(quantity)){
      var newSubTotal = price*quantity;
      tr.find('td[name="subTotal"]').text(newSubTotal);
      this.updateCartValues();
    }
    else{
      tr.find('input').attr('style', 'background-color:red;');
    }
  }
} 
 
