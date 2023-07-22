<script>
  
  import { onMount, afterUpdate, onDestroy } from "svelte";
  import { createEventDispatcher } from "svelte";

  let initialBoard = Array(9).fill(null);
  let board = [...initialBoard];
  let player = "X";
  let winner = null;

  

  
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winner = board[a];
        return true;
      }
    }

    if (!board.includes(null)) {
      winner = "draw";
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = player;
    board = newBoard;
    player = player === "X" ? "O" : "X";
    checkWinner();
  };

  const resetGame = () => {
    board = [...initialBoard];
    player = "X";
    winner = null;
  };

  onMount(() => {
    checkWinner();
  });

  afterUpdate(() => {
    checkWinner();
  });



  
</script>

<style>
  .tic-tac-toe {
  text-align: center;
  margin: 20px;
  color: white;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 2px;
  padding: 2px;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  background-color: #222;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
}
.C0,.C1,.C3{
  box-shadow: 0 0 10px #FF3E00;

}

.C2,.C4,.C6{
    box-shadow:0.1rem 0.1rem 5px #ccc, -0.1rem -0.1rem 5px #FF3E00 ;
}

.C7,.C8,.C5{
      box-shadow: 0 0 10px #ccc;

}
.C0:hover,.C1:hover,.C3:hover,.C4:hover {
    background-color: #333;
    filter: drop-shadow(0 0 2em #ff3e00aa);
}.C7:hover,.C8:hover,.C5:hover,.C6:hover,.C2:hover {
    background-color: #333;
    filter: drop-shadow(0 0 2em #ccc);
}

.status {
  margin-top: 10px;
  font-size: 20px;
  color: #fff;
}

button {
  margin-top: 10px;
  font-size: 25px;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #FF3E00;
  color: white;
  font-weight: bolder;
}

</style>

<div class="tic-tac-toe">
  <div class="board">
    {#each board as cell, index}
      <div
      class={`cell C${index} ${cell === "X" || cell === "O" ? "draw-animation" : ""}`}
        on:click={() => handleClick(index)}
    >
        {cell !== null ?cell : ""}
      </div>
    {/each}
  </div>
  <div class="status">
    {#if winner}
      {#if winner === "draw"}
        <p>It's a Draw!</p>
      {:else}
        <p>Player {winner} wins!</p>
      {/if}
    {:else}
      <p>Player Turn: {player}</p>
    {/if}
  </div>
  <button on:click={resetGame}>Restart Game</button>
</div>
