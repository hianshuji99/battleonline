import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [
    CommonModule, // This is needed for ngIf, ngFor, and ngClass
    FormsModule,FooterComponent],
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
  board: string[] = Array(9).fill(null);
  currentPlayer: string = 'Player 1';
  winner: string = '';

  playMove(index: number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer === 'Player 1' ? 'X' : 'O';
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
    }
  }

  checkWinner() {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
      [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.currentPlayer;
        break;
      }
    }

    if (!this.winner && this.board.every(cell => cell)) {
      this.winner = 'Draw';
    }
  }

  resetGame() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'Player 1';
    this.winner = '';
  }
}

