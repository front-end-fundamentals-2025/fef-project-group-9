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

function showCartCount(cart) {
  if (cartCountElement !== null) {
    if (cart.length > 0) {
      cartCountElement.style.display = "block";
      cartCountElement.innerText = cart.length;
    } else {
      cartCountElement.style.display = "none";
    }
  }
}

// ADD TO CART
const cartButton = document.getElementById("d-button");
const cartCountElement = document.getElementById("cart-count");

if (cartButton !== null) {
  const cartItem = {
    name: document.getElementById("d-name").innerText,
    price: document.getElementById("d-price").innerText,
    img: document.getElementById("d-img").src,
  };

  let cart;

  //  !!!  THIS WORKS  !!! - change back button class to id
  if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart);
    showCartCount(cart);
  } else {
    // if not, create a new cart
    cart = [];
  }
  cartButton.addEventListener("click", function (e) {
    // check if we already have a cart

    cart.push(cartItem);
    localStorage.cart = JSON.stringify(cart);
    showCartCount(cart);
  });
}

// DISPLAY CART LOGIC

const cartUlElement = document.getElementById("cart-items");

if (localStorage.cart) {
  let cart = JSON.parse(localStorage.cart);
  showCartCount(cart);
  if (cart.length === 0) {
    const emptyElement = document.createElement("li");
    emptyElement.classList.add("new-in-blurb");
    emptyElement.innerText = "Your cart is empty.";
    cartUlElement.appendChild(emptyElement);
    showCartCount(cart);
  } else {
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      const imgElement = document.createElement("img");
      imgElement.classList.add("cart-img");
      imgElement.src = item.img;

      const textElement = document.createElement("p");
      textElement.classList.add("cart-text");
      textElement.innerHTML = item.name;

      const priceElement = document.createElement("p");
      priceElement.classList.add("cart-price");
      priceElement.innerHTML = item.price;

      const buttonElement = document.createElement("button");
      buttonElement.innerText = "remove";
      buttonElement.classList.add("cart-button");

      const liElement = document.createElement("li");
      liElement.appendChild(imgElement);
      liElement.appendChild(textElement);
      liElement.appendChild(priceElement);
      liElement.appendChild(buttonElement);
      liElement.classList.add("new-in-blurb");
      liElement.classList.add("cart-list");

      cartUlElement.appendChild(liElement);

      // romove items from cart
      buttonElement.addEventListener("click", function () {
        liElement.remove();

        let updatedCart = [];
        const remainingCartElements =
          document.getElementsByClassName("cart-list");

        //Update cart in local storage
        for (let j = 0; j < remainingCartElements.length; j++) {
          const cartItemElement = remainingCartElements[j];

          const updatedCartItem = {
            name: cartItemElement.querySelector(".cart-text").innerText,
            price: cartItemElement.querySelector(".cart-price").innerText,
            img: cartItemElement.querySelector(".cart-img").src,
          };

          updatedCart.push(updatedCartItem);
        }

        if (updatedCart.length === 0) {
          const emptyElement = document.createElement("li");
          emptyElement.classList.add("new-in-blurb");
          emptyElement.innerText = "Your cart is empty.";
          cartUlElement.appendChild(emptyElement);
        }

        localStorage.cart = JSON.stringify(updatedCart);
        showCartCount(updatedCart);
      });
    }
  }
} else {
  const emptyElement = document.createElement("li");
  emptyElement.classList.add("new-in-blurb");
  emptyElement.innerText = "Your cart is empty.";
  cartUlElement.appendChild(emptyElement);
  showCartCount(updatedCart);
}
