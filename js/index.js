const gallery = document.querySelector(".gallery");




const inputElement = document.querySelector(`input`);
const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const boxElements = document.querySelector("#boxes");

let boxSize = 30;
let boxColor = "";
const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    boxColor = `rgb(${Math.random() * (255 - 0) + 1}, 
    ${Math.random() * (255 - 0) + 1}, 
    ${Math.random() * (255 - 0) + 1})`;
    boxElements.insertAdjacentHTML(
      "beforeend",
      `<div style=" width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor}"></div>`
    );
    boxSize += 10;
  }
};

const destroyBoxes = () => {
  boxElements.innerHTML = "";
  boxSize = 30;
};

renderBtn.addEventListener("click", () => {
    createBoxes(inputElement.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
