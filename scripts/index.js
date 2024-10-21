let container = document.querySelector(".container");
let grid = document.querySelector(".grid");
let amount = document.querySelector("#amount");
let reset = document.querySelector("#reset");
let setRGB = document.querySelector("#rgb");

let checkRGB = false;

let getRGB = () => {
    let colors = ["aqua", "blue", "fuschia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "teal", "yellow"]
    let rndCol = Math.floor(Math.random() * colors.length);

    return colors[rndCol];
}

let makeDivs = (gridSize) => {
    let sizeOfCells = 960 / gridSize;

    grid.style.width = "960px";
    grid.style.height = "960px";
    grid.innerHTML = "";


    for (let i = 0; i < gridSize * gridSize; i++) {
        let cells = document.createElement("div");

        cells.classList.add("equal-cell");

        cells.style.width = `${sizeOfCells}px`;
        cells.style.height = `${sizeOfCells}px`;


        cells.addEventListener("click", () => {
            if (checkRGB) {
                cells.style.backgroundColor = getRGB()
            } else {
                cells.classList.toggle("cells-hover");
            }
        });

        grid.appendChild(cells);
    }

}

amount.addEventListener("click", () => {
    let inputOfUser = prompt("Enter the amount of squares per side");

    if (inputOfUser && inputOfUser > 0 && inputOfUser <= 100) {
        makeDivs(inputOfUser);
    } else {
        alert("Please enter a valid number between 0 and 100");
    };
});

reset.addEventListener("click", () => {
    grid.innerHTML = ""
});

setRGB.addEventListener("click", () => {
    checkRGB = !checkRGB;

    setRGB.textContent = checkRGB ? "RGB ON" : "RGB";
})

makeDivs();