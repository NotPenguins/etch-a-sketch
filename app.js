const gridContainer = document.querySelector("#grid-container");
const blackPen = document.getElementById("black-pen");
const whitePen = document.getElementById("eraser-pen");
const noPen = document.getElementById("rainbow-pen");
//grabs the grid container class

var penColor = 0

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for(let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div"); //creates divs called "gridElement"
        gridElement.classList = "grid-element border pointer"; //gives these divs the "grid-element" class
        gridElement.addEventListener("mouseover", changeColor); //when a grid element is moused over, change its color
        gridContainer.appendChild(gridElement); //slam that new grid element into the gridcontaner div
    }
} //runs this loop until the grid is fully populated with elements

function changeColor(e) {
    console.log(penColor);
    if (penColor == 0) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else {
        e.target.style.backgroundColor = penColor;
    }
}

noPen.addEventListener("click", function () {
    penColor = 0;
    console.log("New pen color: " + penColor)
});
blackPen.addEventListener("click", function () {
    penColor = "#0a0610";
    console.log("New pen color: " + penColor)
});
whitePen.addEventListener("click", function () {
    penColor = "#FFFFFF";
    console.log("New pen color: " + penColor)
});
window.addEventListener("load", setDefaultGrid); //runs the "setDefaultGrid" function on window load
