// Menu Open and Close

var toggle = document.querySelector(".menu-toggle");
var inner = document.querySelector(".menu-inner");
var body = document.querySelector("body");

toggle.addEventListener("click", function(event) {
event.preventDefault();

    if (inner.classList.contains("menu-inner-show")) {
            body.classList.remove("menu-opened");
            inner.classList.remove("menu-inner-show");
          }
                      else { 
                        body.classList.add("menu-opened");
                        inner.classList.add("menu-inner-show");
}
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (inner.classList.contains("menu-inner-show")) {
            inner.classList.remove("menu-inner-show");
          }
        }
      });