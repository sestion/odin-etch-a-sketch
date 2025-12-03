function createGrid(rows, cols) {
    let container = document.querySelector(".container");

    for (let y = 0; y < cols; y++) {
        let col = createColumn(rows);
        container.appendChild(col);
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

createGrid(16, 16);
