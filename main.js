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
const cartName = document.getElementById("cart-name");
const cartText = document.getElementById("cart-text");
const cartImg = document.getElementById("header-img");
let cart = [];

cartButton.addEventListener("click", function (e) {
  // check if we already have a cart
  if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart);
  } else {
    // if not, create a new cart
    cart = [];
  }
  cart.push(cartName.innerText);
  localStorage.cart = JSON.stringify(cart);
});

// Option 2: USE CLASSES AS ARRAYS (?)
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
