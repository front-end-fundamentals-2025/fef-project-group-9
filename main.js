const overlayElement = document.getElementById("overlay");
const shopByElement = document.getElementById("shop-by");
const overLinkElement = document.getElementsByClassName("over-link");

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

/* overLinkElement.addEventListener("mouseover", function (e) {
  overLinkElement.style.color = "#FFFF00";
}); */
