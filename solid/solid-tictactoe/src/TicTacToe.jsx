import { createSignal, onCleanup } from "solid-js";
import "./TicTacToe.css";

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = createSignal(initialBoard);
  const [player, setPlayer] = createSignal("X");
  const [winner, setWinner] = createSignal(null);

  const checkWinner = () => {
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
      if (
        board()[a] &&
        board()[a] === board()[b] &&
        board()[a] === board()[c]
      ) {
        setWinner(board()[a]);
        return true;
      }
    }

    if (!board().includes(null)) {
      setWinner("draw");
    }
  };

  const handleClick = (index) => {
    if (board()[index] || winner()) return;
    const newBoard = [...board()];
    newBoard[index] = player();
    setBoard(newBoard);
    setPlayer(player() === "X" ? "O" : "X");
    checkWinner();
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setPlayer("X");
    setWinner(null);
  };

  onCleanup(() => {
    setBoard(null);
    setPlayer(null);
    setWinner(null);
  });

  const renderBoard = () => {
    return board().map((cell, index) => (
      <div
        key={index}
        className={`cell C${index} ${
          cell === "X" || cell === "O" ? "draw-animation" : ""
        }`}
        onClick={() => handleClick(index)}
      >
        {cell}
      </div>
    ));
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">{renderBoard()}</div>
      <div className="status">
        {winner() ? (
          winner() === "draw" ? (
            <p>It's a Draw!</p>
          ) : (
            <p>Player {winner()} wins!</p>
          )
        ) : (
          <p>Player Turn: {player()}</p>
        )}
      </div>
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default TicTacToe;
