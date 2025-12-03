function createGrid(rows, cols) {
    let container = document.querySelector(".container");

    for (let y = 0; y < cols; y++) {
        let col = createColumn(rows);
        container.appendChild(col);
    }
    return container;
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
            target.style.backgroundColor = "greenYellow";
            break;
    }
}

function init() {
    let container = createGrid(16, 16);

    container.addEventListener("mouseover", changeBGColor);
}

init();