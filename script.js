let containerElement = document.querySelector(".container");

let gridContainer;

for (let i = 1; i <= 16; i++) {
  gridContainer = document.createElement("div");
  gridContainer.style.cssText = "display: flex;";
  containerElement.appendChild(gridContainer);
}

let gridElement;

containerElement.querySelectorAll("div").forEach((element) => {
  for (let i = 1; i <= 16; i++) {
    gridElement = document.createElement("div");
    gridElement.classList.add("grid");
    element.appendChild(gridElement);
  }
});
