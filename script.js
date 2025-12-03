function createGrid(rows, cols, parent) {
    for (let y = 0; y < cols; y++) {
        let col = createColumn(rows);
        parent.appendChild(col);
    }
}

function createColumn(rows) {
    let col = document.createElement("div");
    col.setAttribute("class", "col");

    for (let x = 0; x < rows; x++) {
        let square = createSquare();
        col.appendChild(square);
    }
    return col;
}

function createSquare() {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    return square;
}

function changeBGColor(evt) {
    let target = evt.target;

    switch (target.className) {
        case "square":
            target.style.backgroundColor = `rgb(${getRandomInt(255)} ${getRandomInt(255)} ${getRandomInt(255)})`;
            break;
    }
}

function changeGridSize() {
    let gridSize = parseInt(prompt("Enter the number of squares per side (max. 100)"));

    if (gridSize <= 0 || gridSize > 100) return;

    let container = document.querySelector(".container");
    removeSquares(container);
    createGrid(gridSize, gridSize, container);
}

function removeSquares(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function init() {
    let container = document.querySelector(".container");
    createGrid(16, 16, container);
    container.addEventListener("mouseover", changeBGColor);
    
    let sizeButton = document.querySelector(".changeGridSize");
    sizeButton.addEventListener("click", changeGridSize);
}

init();