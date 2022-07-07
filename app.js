const divContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector(".grid-size-select");
sizeButton.addEventListener("click", () => {
  let numberOfGrid = prompt("how big is tyour grid");
  renderCanvas(numberOfGrid ** 2);
});

let renderCanvas = (size) => {
  for (let i = 0; i < size; i++) {
    let div = document.createElement("div");
    divContainer.appendChild(div);

    div.addEventListener("pointerenter", () => {
      div.style.background = "red";
    });
  }
};
