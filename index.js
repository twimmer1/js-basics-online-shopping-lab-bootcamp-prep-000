var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var obj = { 
    itemName: item, 
    itemPrice: price 
    }
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cart = getCart();
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var result = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  for(var i = 0; i < cart.length; i++) {
    result = result + `, ${cart[i].itemName} at $${cart[i].itemPrice}.`
  }
  return result 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
