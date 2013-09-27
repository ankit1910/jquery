/*
Author - Sahil Bathla
Descrption - Order placing at a restaurant
*/
// resets the menu once order is placed
function resetMenu()
{
  var currentOrders = document.getElementsByClassName('currentOrder');
  for (i = 0; i < itemsBought.length; i = i + 1)
  {
      itemsBought[i].className = itemsBought[i].className.replace('selectedItem', '');  
  }

  for (i = currentOrders.length - 1; i >= 0; i = i - 1)
  {
    currentOrders[i].parentNode.removeChild(currentOrders[i]);
  }

  itemsBought = [];
  categorySelected = [];
  totalPrice = 0;
  document.getElementById('orderList').innerHTML = '';
  document.getElementById('totalPrice').innerHTML = '';
}
// place your order 
function placeOrder()
{
  // ask user name
  var todaysOrder = document.getElementById('todaysOrderList');
  var user = prompt("Enter Your Name");
  // show Todays orders in stack form & update today sale
  var paragraph = document.createElement('p');
  var currentOrders = document.getElementsByClassName('currentOrder');
  paragraph.appendChild(document.createTextNode('Order Placed By:- ' + user));
  for (i = currentOrders.length - 1; i >= 0; i = i - 1)
  {
    paragraph.innerHTML = paragraph.innerHTML + '<br />' + currentOrders[i].textContent;
  }
  paragraph.innerHTML = paragraph.innerHTML + '<hr>Total Price :' + totalPrice + '<hr>';
  todaysSale = todaysSale + totalPrice;
  showSale();
	
  
  if (todaysOrder.textContent.trim() === '')
  {
    todaysOrder.appendChild(paragraph);
  }
  else
  {
    todaysOrder.insertBefore(paragraph, todaysOrder.firstChild);
  }
  alert("Thanks for Placing your order");
  //remove all orders
  resetMenu();
   
    
}
// shows your current order
function changeOrder(action, foodItem, previousItem)
{
  // add a new order
  if (action === 'add')
  {
    var currentOrder = document.getElementById('orderList');
    var paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(foodItem.textContent));
    paragraph.setAttribute('class', 'currentOrder');
    totalPrice = totalPrice + parseInt(foodItem.getAttribute('data-price'), 10);
    currentOrder.appendChild(paragraph);
  }
  // remove or update an order
  else if (action === 'remove' || action === 'update')
  {
    
    var currentOrders = document.getElementsByClassName('currentOrder');
    for (i = 0; i < currentOrders.length ; i = i + 1)
    {
      if (action === 'remove')
      {
        if(currentOrders[i].textContent === foodItem.textContent)
        {
          currentOrders[i].parentNode.removeChild(currentOrders[i]);
          totalPrice = totalPrice - parseInt(foodItem.getAttribute('data-price'), 10);
        }
      }
      else
      {
        if(currentOrders[i].textContent === previousItem.textContent)
        {
          currentOrders[i].textContent = foodItem.textContent;
          totalPrice = totalPrice - parseInt(previousItem.getAttribute('data-price'), 10) + parseInt(foodItem.getAttribute('data-price'), 10);
        }
      }
    }
  }
  // show total price
  if(totalPrice != 0)
  {
    document.getElementById('totalPrice').innerHTML = '<p>Your total : ' + totalPrice + '</p><input type="button" value="Place Order"'
    + ' onClick="placeOrder()" />';
  }
  else
  {
    document.getElementById('totalPrice').innerHTML = '';
  }


}

//class of Items
function Item(foodItem, category, price)
{
  this.item = foodItem;
  this.category = category;
  this.price = price;
  
  var indexOfItem = 0;
  var itemDiv,previousItem = {};

  this.showItem = function() {
    itemDiv = document.createElement('div');
	  itemDiv.setAttribute('data-price', this.price);
	  itemDiv.setAttribute('data-category', this.category);
    itemDiv.innerHTML =  '<p>' + this.item + ' <br>Price: ' + this.price + '</p>';
	  document.getElementById(this.category).appendChild(itemDiv);
    itemDiv.onclick = function() { 
      // if element already selected
      if((/selectedItem$/).test(this.className))
      {
        this.className = '';
        indexOfItem = categorySelected.indexOf(this.getAttribute('data-category'));
        itemsBought.splice(indexOfItem, 1);
        categorySelected.splice(indexOfItem, 1);
        changeOrder('remove', this);
      }
      // if a new element from a new category selected
      else if (categorySelected.indexOf(this.getAttribute('data-category')) === -1)
      { 
        this.className = 'selectedItem';
        itemsBought.push(this);
        categorySelected.push(this.getAttribute('data-category'));
        changeOrder('add', this);
      }   
      // if a element from same category selected 
      else
      {
        this.className = 'selectedItem';
        indexOfItem = categorySelected.indexOf(this.getAttribute('data-category'));
        previousItem = itemsBought[indexOfItem];
        previousItem.className = '';
        itemsBought.splice(indexOfItem, 1, this);
        changeOrder('update', this, previousItem);
      }
    }
  } 
}


window.onload = function()
{
  menu =[
  {"cheese" : [{"name" : "Mozrila Cheese", "price":"50"},{"name" : "Italian Cheese", "price":"70"},{"name" : "Mexican Cheese", "price":"30"}]},
  {"breads" : [{"name" : "White Bread", "price":"100"},{"name" : "Italian Bread", "price":"80"},{"name" : "Brown Bread", "price":"90"}]},
  {"vegetables" : [{"name" : "Brocolli", "price":"250"},{"name" : "Mix Veg", "price":"280"},{"name" : "Rahizuna", "price":"190"}]}
  ]
	//console.log((menu[0].cheese));
  itemsBought = [];
  categorySelected = [];
  totalPrice = 0;
  todaysSale = 0;

  var foodItemArray = [];
  for (i = 0; i < menu.length; i = i + 1)
  {
    for (category in menu[i])
    {	
		  createCategory(category);
		
	    for(j = 0; j < menu[i][category].length; j = j + 1)
	    {
          item = new Item(menu[i][category][j].name, category, menu[i][category][j].price);
          item.showItem();
	    }
    }
  }
}

function createCategory(category)
{
  var itemDiv = document.createElement('div');
  var para = document.createElement('p');
  var textNode = document.createTextNode(category);
  itemDiv.id = category;
  para.appendChild(textNode);
  itemDiv.appendChild(para);
  document.getElementById('menu').appendChild(itemDiv);
}

function showSale()
{
  if(todaysSale > 0)
  {
    document.getElementById('todaysSale').textContent = 'Todays Sale : - Rs ' + todaysSale;
  }	
}

