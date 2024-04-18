let element = document.getElementById("container");

const GRIDSIDE = 600;
let squaresPerSide = 16;

const skethArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

let colorType = "black";
let storeColor = "";

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

skethArea.style.width = skethArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
  this.style.backgroundColor = "black";
  if (colorType == 'rainbow'){
            
    //Rainbow color mode
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1)); //Math.random can only generate up to 1, it cannot equal 1.
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    this.style.backgroundColor = `rgb(${r},${g},${b})`;
}}

function createGridCells(squaresPerSide) {
  const numOfSquares = squaresPerSide * squaresPerSide;
  const widthOrHeight = `${GRIDSIDE / squaresPerSide - 2}px`;

  for (let i = 0; i < numOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");

    skethArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", setBackgroundColor);
  }
}

function removeGridCells() {
  while (skethArea.firstChild) {
    skethArea.removeChild(skethArea.firstChild);
  }
}
blackButton.addEventListener('click', () => {
  console.log("The black button was clicked");
  colorType = 'black';
  removeGridCells(skethArea);
  createGridCells(squaresPerSide)


  blackButton.style.backgroundColor = "#393e41";
  blackButton.style.color = "whitesmoke"


})

rainbowButton.addEventListener("click", () => {
  console.log("The rainbow button was clicked");

  removeGridCells(skethArea);
  createGridCells(squaresPerSide)

  colorType = "rainbow";

 

  rainbowButton.style.backgroundColor = "#393e41";
  rainbowButton.style.color = "whitesmoke";

});

slider.oninput = function () {
  let txt = `${this.value} x ${this.value} (Resolution)`;
  sliderValue.innerHTML = txt;
  removeGridCells();
  createGridCells(this.value);
};



createGridCells(16);
