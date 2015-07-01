// Menu Open and Close

var toggle = document.querySelector(".js-menu__toggle");
var body = document.body;

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  body.classList.toggle("menu-opened");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    body.classList.remove("menu-opened");
  }
});