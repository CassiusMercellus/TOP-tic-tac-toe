let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

function cellClicked(event) {
    const clickedCell = event.target;
    if (clickedCell.textContent === '') {
        clickedCell.textContent = currentPlayer;
        if (checkWin()) {
            alert(currentPlayer + ' wins!');
            resetGame();
        } else if (checkDraw()) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winConditions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    return winConditions.some(combination =>
        combination.every(cell =>
            document.getElementById(cell).textContent === currentPlayer
        )
    );
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', cellClicked));
