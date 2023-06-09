// Main container and DOM element variables
const mainContainer = document.querySelector(".main-container");
const inputValue = document.querySelector(".sidebar--slider");
const inputLabel = document.querySelector(".sidebar--label");

// Buttons and Slider DOM Variables
const colorInput = document.querySelector(".color-input");
const colorBtn = document.querySelector(".sidebar--color");
const rainbowBtn = document.querySelector(".sidebar--rainbow");
const eraserBtn = document.querySelector(".sidebar--eraser");
const clearBtn = document.querySelector(".sidebar--clear");

// Default Colors and Values
let currentColor = "black";
let colorWheel = "black";
let currentValue = inputValue.value;
let currentFunction = colorBtn;
let rainbowMode = false;

// Event Listener Control Variable
let mouseDown = false;

// Functions

const runDefault = () => {
  mainContainer.style.gridTemplateColumns = `repeat(8, 1fr)`;

  for (let i = 0; i < 64; i++) {
    let newEl = document.createElement("div");
    newEl.classList.add(".box");
    mainContainer.append(newEl);
  }
};

const render = (value) => {
  console.log(value);
  mainContainer.innerHTML = "";

  mainContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

  for (let i = 0; i < value * value; i++) {
    let newEl = document.createElement("div");
    newEl.classList.add(".box");
    mainContainer.append(newEl);
  }
};

const getRandom = (e) => {
  let [rand1, rand2, rand3] = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
  currentColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
  e.target.style.backgroundColor = `${currentColor}`;
};

const setActive = (btn) => {
  currentFunction.classList.remove("active");
  currentFunction = btn;
  currentFunction.classList.add("active");
};

const setWhite = () => {
  currentColor = "white";
};

// Event Listners

mainContainer.addEventListener("mousedown", (e) => {
  mouseDown = true;
  rainbowMode
    ? getRandom(e)
    : (e.target.style.backgroundColor = `${currentColor}`);
});

mainContainer.addEventListener("mouseup", () => {
  mouseDown = false;
});

mainContainer.addEventListener("mouseover", (e) => {
  if (mouseDown === true) {
    rainbowMode
      ? getRandom(e)
      : (e.target.style.backgroundColor = `${currentColor}`);
  }
});

inputValue.addEventListener("change", (e) => {
  currentValue = `${e.target.value}`;
  inputLabel.textContent = `${currentValue} x ${currentValue}`;
  render(currentValue);
});

colorInput.addEventListener("change", (e) => {
  rainbowMode = false;
  currentColor = `${e.target.value}`;
  colorWheel = `${e.target.value}`;
  setActive(colorBtn);
});

colorBtn.addEventListener("click", () => {
  rainbowMode = false;
  currentColor = colorWheel;
  setActive(colorBtn);
});

rainbowBtn.addEventListener("click", () => {
  rainbowMode = true;
  setActive(rainbowBtn);
});

eraserBtn.addEventListener("click", () => {
  rainbowMode = false;
  setWhite();
  setActive(eraserBtn);
});

clearBtn.addEventListener("click", () => {
  rainbowMode = false;
  setWhite();
  setActive(clearBtn);
  render(currentValue);
});

runDefault();
