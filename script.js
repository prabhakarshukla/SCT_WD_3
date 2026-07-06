const gameBoard = document.querySelector(".game-board");
const restartBtn = document.querySelector("#restartBtn");
const status = document.querySelector("#status");

const modeModal = document.querySelector("#modeModal");
const botModeBtn = document.querySelector("#botMode");
const twoPlayerBtn = document.querySelector("#twoPlayerMode");

let currentPlayer = "X";
let gameOver = false;
let isBotMode = false;

for (let i = 0; i < 9; i++) {

    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("click", function () {

    if (gameOver) {
        return;
    }

    if (cell.textContent !== "") {
        return;
    }

    cell.textContent = currentPlayer;

    checkWinner();


    if (!gameOver) {

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        status.textContent = "Current Turn: " + currentPlayer;

        if (isBotMode && currentPlayer === "O") {
            botMove();
        }
    }

});
    gameBoard.appendChild(cell);

}

function checkWinner() {

    const cells = document.querySelectorAll(".cell");
    const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];
for (const combination of winningCombinations) {

    const [a, b, c] = combination;
    const cellA = cells[a].textContent;
    const cellB = cells[b].textContent;
    const cellC = cells[c].textContent;

    if (
    cellA !== "" &&
    cellA === cellB &&
    cellB === cellC
) {
   gameOver = true;

cells[a].classList.add("winner");
cells[b].classList.add("winner");
cells[c].classList.add("winner");

status.textContent = "🎉 " + cellA + " Wins!";

return;
}
}

let isDraw = true;

for (const cell of cells) {

    if (cell.textContent === "") {
        isDraw = false;
    }

}

if (isDraw) {

    gameOver = true;

    status.textContent = "🤝 It's a Draw!";

}
}

function botMove() {

    const cells = document.querySelectorAll(".cell");

    let emptyCells = [];

    cells.forEach((cell, index) => {
        if (cell.textContent === "") {
            emptyCells.push(index);
        }
    });

    if (emptyCells.length === 0) return;

    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let cellIndex = emptyCells[randomIndex];

    setTimeout(() => {

        if (!gameOver) {
            cells[cellIndex].click();
        }

    }, 500);

}

restartBtn.addEventListener("click", function () {

    const cells = document.querySelectorAll(".cell");

    for (const cell of cells) {
        cell.textContent = "";
        cell.classList.remove("winner");
    }

    currentPlayer = "X";
    gameOver = false;

    isBotMode = false;

    modeModal.style.display = "flex";

    status.textContent = "Current Turn: X";

});

botModeBtn.addEventListener("click", function () {

    isBotMode = true;

    modeModal.style.display = "none";

});

twoPlayerBtn.addEventListener("click", function () {

    isBotMode = false;

    modeModal.style.display = "none";

});