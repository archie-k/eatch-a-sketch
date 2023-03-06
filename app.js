// DOM selectros
const divContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector(".grid-size-select");

let numberOfGrid;

sizeButton.addEventListener("click", () => {

  numberOfGrid = Number(prompt("How big is your grid?"));
  resetGrid();
  renderGrid(numberOfGrid);
});

const singleGridElement = () => {
  let div = document.createElement("div");
  div.style.width = 420 / numberOfGrid + "px"; 
  div.style.height = 420 / numberOfGrid + "px";
  return div;
}


const renderGrid = (number) => {
  for(let i = 0; i < number; i++) {
    for(let j = 0; j < number; j++) {
      divContainer.appendChild(singleGridElement());
    }
  }
}

const resetGrid = () => {
  while(divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
    console.log('Element usnięty!!')
  }
}