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
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    console.log("Your cart is empty.");
  } else {
    for (let i = 0; i < cartTwo.length; i++) {
      let item = cartTwo[i];
      const liElement = document.createElement("li");
      liElement.innerHTML = item;
      liElement.classList.add("new-in-blurb");
      liElement.classList.add("in-cart");

      cartItems.appendChild(liElement);
    }
  }
} else {
  console.log("Your cart is empty.");
}

const cartElements = document.getElementsByClassName("in-cart");

for (let i = 0; i < cartElements.length; i++) {
  const cartElement = cartElements[i];
  cartElement.addEventListener("click", function (e) {
    cartElement.remove();
    //cartThree.splice(i, 1);
    //localStorage.cart = JSON.stringify(cartThree);
    const updatedCart = [];
    const remainingCartElements = document.getElementsByClassName("in-cart");

    for (let j = 0; j < remainingCartElements.length; j++) {
      updatedCart.push(remainingCartElements[j].innerText);
    }
    localStorage.cart = JSON.stringify(updatedCart);
  });
}
