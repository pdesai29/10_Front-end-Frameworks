import { LitElement, html, css } from "lit";

class TicTacToe extends LitElement {
  static styles = css`
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
      box-shadow: 0 0 10px #325cffaa;
    }

    .cell:hover {
      background-color: #333;
      filter: drop-shadow(0 0 2em #325cffaa);
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

    .C0,
    .C1,
    .C3 {
      box-shadow: 0 0 10px rgb(50, 79, 255);
    }
    .C0:hover,
    .C1:hover,
    .C3:hover {
      filter: drop-shadow(0 0 2em rgb(50, 79, 255));
    }
    .C6,
    .C4,
    .C2 {
      box-shadow: 0 0 10px rgba(0, 255, 255, 1);
    }

    .C6:hover,
    .C4:hover,
    .C2:hover {
      filter: drop-shadow(0 0 2em rgba(0, 255, 255, 1));
    }

    .C5,
    .C7,
    .C8 {
      box-shadow: 0 0 10px rgba(50, 79, 255, 1);
    }

    .C5:hover,
    .C7:hover,
    .C8:hover {
      filter: drop-shadow(0 0 2em rgba(50, 79, 255, 1));
    }
    button:hover {
      background: rgb(40, 49, 152);
      background: linear-gradient(
        90deg,
        rgba(40, 49, 152, 1) 33%,
        rgba(50, 79, 255, 1) 57%,
        rgba(0, 255, 255, 1) 80%
      );
      font-weight: bolder;
    }
  `;

  static properties = {
    board: { type: Array },
    player: { type: String },
    winner: { type: String },
  };

  constructor() {
    super();
    this.board = Array(9).fill(null);
    this.player = "X";
    this.winner = null;
  }

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
        return;
      }
    }

    if (!this.board.includes(null)) {
      this.winner = "draw";
    }
  }

  handleClick(index) {
    if (this.board[index] || this.winner) return;
    this.board[index] = this.player;
    this.checkWinner();
    this.player = this.player === "X" ? "O" : "X";
    this.requestUpdate();
  }

  resetGame() {
    this.board = Array(9).fill(null);
    this.player = "X";
    this.winner = null;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="tic-tac-toe">
        <div class="board">
          ${this.board.map(
            (cell, index) => html`
              <div
                class="cell C${index}"
                @click="${() => this.handleClick(index)}"
              >
                ${cell}
              </div>
            `
          )}
        </div>
        <div class="status">
          ${this.winner
            ? this.winner === "draw"
              ? html`<p>It's a Draw!</p>`
              : html`<p>Player ${this.winner} wins!</p>`
            : html`<p>Player Turn: ${this.player}</p>`}
        </div>
        <button @click="${this.resetGame}">Restart Game</button>
      </div>
    `;
  }
}

customElements.define("tic-tac-toe", TicTacToe);
