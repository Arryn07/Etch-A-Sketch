//create a grid with given # of squares and adds style to the divs

let gridArray = [];
let gridContainer = document.querySelector("#container");

function createGrid(squares) {

    if (gridArray != []) {
        //removes any existing grid from visible container
        gridArray.forEach((exSquare) => {
        gridContainer.removeChild(exSquare);
    })
    //removes any existing grid from gridArray
    gridArray.splice(0, gridArray.length);
    }

    if (squares <= 100 && squares >= 0) {
        //creates given # of divs (squares)
        for (i = 0; i < (squares * squares); i++) {
            let gridSquare = document.createElement("div");
            gridContainer.appendChild(gridSquare);
            gridArray.push(gridSquare);
        }

        //adds class to each div and calculates proper sizing
        gridArray.forEach((gridSquare) => {
            gridSquare.classList.add("gridSquare");
            let squareWidth = 500 / squares;
            gridSquare.style.width = squareWidth + "px";
        })
    } else if (squares <= 0) {
        alert("Please enter a positive number");
    } else {
        alert("Too many squares");
    }

    //adds trail on mouseout
    gridArray.forEach((gridSquare) => {
        gridSquare.addEventListener("mouseout", () => {
            gridSquare.style.backgroundColor = "black";
        })
    })
}

addEventListener("DOMContentLoaded", () => {
    createGrid(50); //default grid when page opens
});

const gridRange = document.querySelector("#gridRange");
const gridSubmit = document.querySelector("#gridSubmit");
gridSubmit.addEventListener("click", () => {
    createGrid(gridRange.value);
})