const gameBoard = document.querySelector(".game-board");
let currentPlayer = "X";
for (let i = 0; i < 9; i++) {

    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("click", function () {
    if (cell.textContent !== "") {
    return;
}
    cell.textContent = currentPlayer;
    if (currentPlayer === "X") {
       currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
});
    gameBoard.appendChild(cell);

}

function checkWinner() {

    const cells = document.querySelectorAll(".cell");

    console.log(cells);
}
