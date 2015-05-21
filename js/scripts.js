// Menu Open and Close

var toggle = document.querySelector(".menu__toggle");
var inner = document.querySelector(".menu__inner");
var body = document.querySelector("body");

toggle.addEventListener("click", function(event) {
event.preventDefault();

    if (inner.classList.contains("menu__inner_state_show")) {
            body.classList.remove("menu-opened");
            inner.classList.remove("menu__inner_state_show");
          }
                      else { 
                        body.classList.add("menu-opened");
                        inner.classList.add("menu__inner_state_show");
}
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (inner.classList.contains("menu__inner_state_show")) {
            inner.classList.remove("menu__inner_state_show");
          }
        }
      });