const gameBoard = document.querySelector(".game-board");
const restartBtn = document.querySelector("#restartBtn");
const status = document.querySelector("#status");
let currentPlayer = "X";
let gameOver = false;
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
   if (currentPlayer === "X") {

    currentPlayer = "O";

} else {

    currentPlayer = "X";

}

status.textContent = "Current Turn: " + currentPlayer;

checkWinner();
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
restartBtn.addEventListener("click", function () {

    const cells = document.querySelectorAll(".cell");

    for (const cell of cells) {

        cell.textContent = "";

    }

    currentPlayer = "X";

    gameOver = false;
    status.textContent = "Current Turn: X";

});