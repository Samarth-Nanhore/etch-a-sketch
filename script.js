const containerElement = document.querySelector(".container");

const gridContainer = document.createElement("div");
gridContainer.style.cssText = "display: flex;";

containerElement.appendChild(gridContainer);

const gridElement = document.createElement("div");
gridElement.classList.add("grid");

gridContainer.appendChild(gridElement);
