<template>
  <div class="tic-tac-toe">
    <div class="board">
      <div
        v-for="(cell, index) in board"
        :key="index"
        :class="[
          'cell',
          `C${index}`,
          { 'draw-animation': cell === 'X' || cell === 'O' },
        ]"
        @click="handleClick(index)"
      >
        {{ cell }}
      </div>
    </div>
    <div class="status">
      <p v-if="winner">
        {{ winner === "draw" ? "It's a Draw!" : `Player ${winner} wins!` }}
      </p>
      <p v-else>Next Player: {{ player }}</p>
    </div>
    <button @click="resetGame">Restart Game</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        initialBoard: Array(9).fill(null),
        board: [...Array(9).fill(null)],
        player: "X",
        winner: null,
      };
    },
    watch: {
      board: "checkWinner",
      player: "checkWinner",
      winner: "checkWinner",
    },
    methods: {
      checkWinner() {
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
            this.board[a] &&
            this.board[a] === this.board[b] &&
            this.board[a] === this.board[c]
          ) {
            this.winner = this.board[a];
            return true;
          }
        }

        if (!this.board.includes(null)) {
          this.winner = "draw";
        }
      },
      handleClick(index) {
        if (this.board[index] || this.winner) return;
        const newBoard = [...this.board];
        newBoard[index] = this.player;
        this.board = newBoard;
        this.player = this.player === "X" ? "O" : "X";
      },
      resetGame() {
        this.board = [...this.initialBoard];
        this.player = "X";
        this.winner = null;
      },
    },
  };
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
  .C0,
  .C1,
  .C3 {
    box-shadow: 0 0 10px rgb(65, 184, 131);
  }

  .C2,
  .C4,
  .C6 {
    box-shadow: 0.1rem 0.1rem 5px rgba(53, 73, 94, 1),
      -0.1rem -0.1rem 5px rgb(65, 184, 131);
  }

  .C7,
  .C8,
  .C5 {
    box-shadow: 0 0 10px rgba(53, 73, 94, 1);
  }
  .C0:hover,
  .C1:hover,
  .C3:hover,
  .C4:hover {
    background-color: #333;
    filter: drop-shadow(0 0 2em rgb(65, 184, 131));
  }
  .C7:hover,
  .C8:hover,
  .C5:hover,
  .C6:hover,
  .C2:hover {
    background-color: #333;
    filter: drop-shadow(0 0 2em rgba(53, 73, 94, 1));
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
    background: rgb(65, 184, 131);
    background: linear-gradient(
      90deg,
      rgba(65, 184, 131, 1) 33%,
      rgba(53, 73, 94, 1) 64%
    );
    color: white;
    font-weight: bolder;
  }
</style>
