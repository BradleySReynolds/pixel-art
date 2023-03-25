const mainContainer = document.querySelector(".main-container");
const inputValue = document.querySelector(".sidebar--slider");
const inputLabel = document.querySelector(".sidebar--label");

const colorInput = document.querySelector(".color-input");

const colorBtn = document.querySelector(".sidebar--color");
const rainbowBtn = document.querySelector(".sidebar--rainbow");
const eraserBtn = document.querySelector(".sidebar--eraser");
const clearBtn = document.querySelector(".sidebar--clear");

let currentColor = "black";
let colorWheel = "black";
let currentValue = inputValue.value;
let currentFunction = colorBtn;
let rainbowMode = false;

console.log(inputValue.value);

let mouseDown = false;

mainContainer.style.gridTemplateColumns = `repeat(8, 1fr)`;

for (let i = 0; i < 64; i++) {
  let newEl = document.createElement("div");
  newEl.classList.add(".box");
  mainContainer.append(newEl);
}

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

inputValue.addEventListener("change", (e) => {
  currentValue = `${e.target.value}`;
  inputLabel.textContent = `${currentValue} x ${currentValue}`;
  render(currentValue);
  console.log(currentValue, e.target.value);
});

mainContainer.addEventListener("mousedown", (e) => {
  mouseDown = true;
  if (rainbowMode) {
    let [rand1, rand2, rand3] = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    currentColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
    e.target.style.backgroundColor = `${currentColor}`;
  } else {
    e.target.style.backgroundColor = `${currentColor}`;
  }
});

mainContainer.addEventListener("mouseup", () => {
  mouseDown = false;
});

mainContainer.addEventListener("mouseover", (e) => {
  if (mouseDown === true && !rainbowMode) {
    e.target.style.backgroundColor = `${currentColor}`;
  } else if (mouseDown === true && rainbowMode) {
    let [rand1, rand2, rand3] = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    currentColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
    e.target.style.backgroundColor = `${currentColor}`;
  }
});

// Different Functions

colorInput.addEventListener("change", (e) => {
  rainbowMode = false;
  currentColor = `${e.target.value}`;
  colorWheel = `${e.target.value}`;
  currentFunction.classList.remove("active");
  currentFunction = colorBtn;
  currentFunction.classList.add("active");
});

colorBtn.addEventListener("click", () => {
  rainbowMode = false;
  currentColor = colorWheel;
  currentFunction.classList.remove("active");
  currentFunction = colorBtn;
  currentFunction.classList.add("active");
});

rainbowBtn.addEventListener("click", () => {
  rainbowMode = true;
  currentFunction.classList.remove("active");
  currentFunction = rainbowBtn;
  currentFunction.classList.add("active");
});

eraserBtn.addEventListener("click", () => {
  rainbowMode = false;
  currentColor = "white";
  currentFunction.classList.remove("active");
  currentFunction = eraserBtn;
  currentFunction.classList.add("active");
});

clearBtn.addEventListener("click", () => {
  rainbowMode = false;
  currentColor = "white";
  currentFunction.classList.remove("active");
  currentFunction = clearBtn;
  currentFunction.classList.add("active");
  render(currentValue);
});
