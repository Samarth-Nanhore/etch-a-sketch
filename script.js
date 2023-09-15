let containerElement;
let gridContainer;
let gridElement;
let everyGridContainer;

let createGridTable = (grid = 16) => {
  containerElement = document.querySelector(".container");
  for (let i = 1; i <= grid; i++) {
    gridContainer = document.createElement("div");
    gridContainer.style.cssText = "display: flex;";
    gridContainer.classList.add("gridcontainer");
    containerElement.appendChild(gridContainer);
  }
  everyGridContainer = containerElement.querySelectorAll("div");
  everyGridContainer.forEach((element) => {
    for (let i = 1; i <= grid; i++) {
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
};

createGridTable();
