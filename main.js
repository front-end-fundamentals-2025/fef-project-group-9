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

if (cartButton !== null) {
  // +++++ THIS IF STATEMENT IS NEW +++++

  const cartName = document.getElementById("cart-name");

  let cart;

  //  !!!  THIS WORKS  !!! - change back button class to id

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
} // +++++ NEW IF STATEMENT END +++++

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

// +++++ NEW STUFF +++++

// DISPLAY CART LOGIC

const cartItems = document.getElementById("cart-items");

if (localStorage.cart) {
  let cartTwo = JSON.parse(localStorage.cart);

  if (cartTwo.length === 0) {
    const emptyElement = document.createElement("li");
    emptyElement.classList.add("new-in-blurb");
    emptyElement.innerText = "Your cart is empty.";
    cartItems.appendChild(emptyElement);
  } else {
    for (let i = 0; i < cartTwo.length; i++) {
      let item = cartTwo[i];
      const nameElement = document.createElement("p");
      nameElement.classList.add("cart-name");
      nameElement.innerText = item;
      const buttonElement = document.createElement("button");
      buttonElement.innerText = "remove";
      buttonElement.classList.add("cart-button");
      const liElement = document.createElement("li");
      liElement.appendChild(nameElement);
      liElement.appendChild(buttonElement);
      liElement.classList.add("new-in-blurb");
      liElement.classList.add("cart-list");
      cartItems.appendChild(liElement);
    }
  }
} else {
  const emptyElement = document.createElement("li");
  emptyElement.classList.add("new-in-blurb");
  emptyElement.innerText = "Your cart is empty.";
  cartItems.appendChild(emptyElement);
}

const cartNameElements = document.getElementsByClassName("cart-name");
const cartButtonElements = document.getElementsByClassName("cart-button");

for (let i = 0; i < cartNameElements.length; i++) {
  const cartNameElement = cartNameElements[i];
  const cartButtonElement = cartButtonElements[i];
  cartButtonElement.addEventListener("click", function (e) {
    cartNameElement.parentElement.remove();

    const updatedCart = [];

    const remainingCartElements = document.getElementsByClassName("cart-name");

    for (let j = 0; j < remainingCartElements.length; j++) {
      updatedCart.push(remainingCartElements[j].innerText);
    }
    if (updatedCart.length === 0) {
      const emptyElement = document.createElement("li");
      emptyElement.classList.add("new-in-blurb");
      emptyElement.innerText = "Your cart is empty.";
      cartItems.appendChild(emptyElement);
    }
    localStorage.cart = JSON.stringify(updatedCart);
  });
}
