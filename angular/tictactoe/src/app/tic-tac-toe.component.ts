import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: 'tic-tac-toe.component.html',
  styleUrls: ['tic-tac-toe.component.css'],
})
export class TicTacToeComponent implements OnInit {
  initialBoard: string[] = Array(9).fill('');
  board: string[] = [...this.initialBoard];
  player: string = 'X';
  winner: string | null = null;

  constructor() {}

  ngOnInit() {
    this.checkWinner();
  }

  checkWinner(): void {
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

    if (!this.board.includes('')) {
      this.winner = 'draw';
    }
  }

  handleClick(index: number): void {
    if (this.board[index] || this.winner) return;
    this.board[index] = this.player;
    this.setPlayer(this.player === 'X' ? 'O' : 'X');
  }

  resetGame(): void {
    this.board = [...this.initialBoard];
    this.player = 'X';
    this.winner = null;
  }

  setPlayer(player: string): void {
    this.player = player;
    this.checkWinner();
  }
}
