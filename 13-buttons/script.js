"use strict";

const elements = {
  conter: document.querySelector(".buttons__counter"),
  buttons: document.querySelector(".buttons__block"),
};

let quantityClicks = 0;

for (let item = 1; item < 10; item++) {
  const button = document.createElement("button");
  button.classList.add("buttons__button");
  button.innerHTML = "Нажми меня!";
  elements.buttons.appendChild(button);
}

function clickButtonEvent(e) {
  const activeElement = e.target;
  if (!activeElement.classList.contains("buttons__button")) {
    return;
  }
  for (const element of elements.buttons.children) {
    element.classList.remove("buttons__button_active");
    element.innerHTML = "Нажми меня!";
  }
  activeElement.classList.add("buttons__button_active");
  activeElement.innerHTML = "Нажата!";
  quantityClicks = ++quantityClicks;
  elements.conter.innerHTML = quantityClicks;
}

elements.buttons.addEventListener("click", clickButtonEvent);
