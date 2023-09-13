let containerElement = document.querySelector(".container");

let gridContainer;

for (let i = 1; i <= 16; i++) {
  gridContainer = document.createElement("div");
  gridContainer.style.cssText = "display: flex;";
  gridContainer.classList.add("gridcontainer");
  containerElement.appendChild(gridContainer);
}

let gridElement;

let everyGridContainer = containerElement.querySelectorAll("div");

everyGridContainer.forEach((element) => {
  for (let i = 1; i <= 16; i++) {
    gridElement = document.createElement("div");
    gridElement.classList.add("grid");
    element.appendChild(gridElement);
  }
});

let gridElementsSelector = document.querySelectorAll("div.grid");

gridElementsSelector.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.cssText = "background: #FFC436;";
  });
});
