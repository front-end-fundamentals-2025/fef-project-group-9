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

const cartButton = document.getElementById("d-button");
const cartBow = document.getElementById("cart-bow");
const cartSpiral = document.getElementById("cart-spiral");
let cart = [];

cartButton.addEventListener("click", function (e) {
  cart.push(cartBow.innerText);
  localStorage.cart = JSON.stringify(cart);
});

cartButton.addEventListener("click", function (e) {
  cart.push(cartSpiral.innerText);
  localStorage.cart = JSON.stringify(cart);
});
