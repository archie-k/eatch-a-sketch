const divContainer = document.querySelector(".grid-container");

const numberOfGrid = 256;

for (let i = 0; i < numberOfGrid; i++) {
  let div = document.createElement("div");
  divContainer.appendChild(div);

  div.addEventListener("pointerenter", () => {
    div.style.background = "red";
  });
}
