import { component$, useSignal, $ } from "@builder.io/qwik";
import "./TicTacToe.css";
export default component$(() => {
  const initialBoard = Array(9).fill(null);
  const board = useSignal(initialBoard);
  const player = useSignal("X");
  const winner = useSignal(null);

  const checkWinner = $(() => {
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
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        winner.value = board.value[a];
        return true;
      }
    }

    if (!board.value.includes(null)) {
      winner.value = "draw";
    }
  });

  const handleClick = $(async (index) => {
    if (board.value[index] || winner.value) return;
    const newBoard = [...board.value];
    newBoard[index] = player.value;
    board.value = newBoard;
    player.value = player.value === "X" ? "O" : "X";
    await checkWinner();
  });

  const resetGame = $(() => {
    board.value = initialBoard;
    player.value = "X";
    winner.value = null;
  });

  const renderBoard = () => {
    return board.value.map((cell, index) => (
      <div
        key={index}
        className={`cell C${index} ${
          cell === "X" || cell === "O" ? "draw-animation" : ""
        }`}
        onClick$={() => handleClick(index)}
      >
        {cell}
      </div>
    ));
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">{renderBoard()}</div>
      <div className="status">
        {winner.value ? (
          winner.value === "draw" ? (
            <p>It's a Draw!</p>
          ) : (
            <p>Player {winner.value} wins!</p>
          )
        ) : (
          <p>Next Player: {player.value}</p>
        )}
      </div>
      <button onClick$={resetGame}>Restart Game</button>
    </div>
  );
});
