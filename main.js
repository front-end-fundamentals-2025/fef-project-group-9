const overlayElement = document.getElementById("overlay");
const shopByElement = document.getElementById("shop-by");

shopByElement.addEventListener("mouseover", function (e) {
  overlayElement.style.display = "block";
});
shopByElement.addEventListener("mouseout", function (e) {
  overlayElement.style.display = "none";
});
overlayElement.addEventListener("mouseover", function (e) {
  overlayElement.style.display = "block";
});
overlayElement.addEventListener("mouseout", function (e) {
  overlayElement.style.display = "none";
});

// Option 1:

const cartButton = document.getElementById("d-button");
const cartBow = document.getElementById("cart-bow");
const cartSpiral = document.getElementById("cart-spiral");
let cart = [];

cartButton.addEventListener("click", function (e) {
  // check if we already have a cart
  if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart);
  } else {
    // if not, create a new cart
    cart = [];
  }
  cart.push(cartBow.innerText);
  localStorage.cart = JSON.stringify(cart);
});

//same id for all buttons = on click it goes through both eventListeners (we could make them all in one?)
cartButton.addEventListener("click", function (e) {
  cart.push(cartSpiral.innerText);
  localStorage.cart = JSON.stringify(cart);
});

// Option 2: USE CLASSES AS ARRAYS - one 'for-loop' = no 100 != ids and no copy paste
// nb - change button 'id' in html to 'class'

/* const cartButtons = document.getElementsByClassName("d-button");
const headerElements = document.getElementsByClassName("d-header");
let cart;

for (let i = 0; i < cartButtons.length; i++) {
  const cartButton = cartButtons[i]; // get prod-button
  const headerElement = headerElements[i]; // get prod-header
  cartButton.addEventListener("click", function (e) {
    // check if we already have a cart
    if (localStorage.cart) {
      cart = JSON.parse(localStorage.cart);
    } else {
      // if not, create a new cart
      cart = [];
    }
    cart.push(headerElement.innerText);
    localStorage.cart = JSON.stringify(cart);
  });
} */

