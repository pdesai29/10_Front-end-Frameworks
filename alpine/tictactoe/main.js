function app() {
  return {
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null,

    init() {
      this.reset();
    },

    makeMove(i) {
      if (this.squares[i] || this.winner) {
        return;
      }

      this.squares[i] = this.xIsNext ? "X" : "O";
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    },

    calculateWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const line of lines) {
        const [a, b, c] = line;
        if (
          this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]
        ) {
          return this.squares[a];
        }
      }

      return null;
    },

    get status() {
      if (this.winner) {
        return `Player ${this.winner} wins!`;
      } else if (this.squares.every((square) => square)) {
        return "It's a Draw!";
      } else {
        return `Player Turn: ${this.xIsNext ? "X" : "O"}`;
      }
    },

    reset() {
      this.squares = Array(9).fill(null);
      this.winner = null;
      this.xIsNext = true;
    },
  };
}
