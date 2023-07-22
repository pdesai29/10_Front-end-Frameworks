export function initTicTacToe() {
  const initialBoard = Array(9).fill(null);
  let board = [...initialBoard];
  let player = "X";
  let winner = null;

  const boardElement = document.getElementById("board");
  const statusElement = document.getElementById("status");

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winner = board[a];
        statusElement.innerHTML =
          winner === "draw" ? "It's a Draw!" : `Player ${winner} wins!`;
        return true;
      }
    }

    if (!board.includes(null)) {
      winner = "draw";
      statusElement.innerHTML = "It's a Draw!";
    } else {
      statusElement.innerHTML = `Next Player: ${player}`;
    }
  }

  function createCell(index) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = board[index] || "";
    cell.addEventListener("click", () => handleClick(index));
    return cell;
  }

  function renderBoard() {
    boardElement.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
      boardElement.appendChild(createCell(i));
    }
  }

  function handleClick(index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = player;
    board = newBoard;
    renderBoard();
    player = player === "X" ? "O" : "X";
    checkWinner();
  }

  function resetGame() {
    board = [...initialBoard];
    player = "X";
    winner = null;
    renderBoard();
    statusElement.innerHTML = "Next Player: X";
  }

  renderBoard();
  document.querySelector("button").addEventListener("click", resetGame);
}
