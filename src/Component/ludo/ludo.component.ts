import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

interface Player {
  name: string;
  color: string;
  positions: number[]; // Positions for the pieces
}

@Component({
  selector: 'app-ludo',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './ludo.component.html',
  styleUrls: ['./ludo.component.css']
})
export class LudoComponent {
  numPlayers: number = 4; // Default number of players
  playerOptions = [2, 3, 4]; // Options for number of players
  players: Player[] = []; // Array to store players
  board: { [key: string]: string } = {}; // Board with piece positions
  diceResult: number = 0; // Result from rolling the dice
  currentPlayerIndex: number = 0; // Index of the current player
  winner: string = ''; // Winner of the game
  totalPositions: number = 56; // Number of positions on the board

  constructor() {
    this.initializeGame();
  }

  initializeGame() {
    this.players = this.createPlayers();
    this.board = this.createBoard();
    this.currentPlayerIndex = 0;
    this.winner = '';
    this.diceResult = 0;
  }

  createPlayers(): Player[] {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const players: Player[] = [];
    for (let i = 0; i < this.numPlayers; i++) {
      players.push({
        name: `Player ${i + 1}`,
        color: colors[i],
        positions: [0, 0, 0, 0] // Each player starts with 4 pieces
      });
    }
    return players;
  }

  createBoard() {
    const board: { [key: string]: string } = {};
    // Initialize the board with positions
    for (let i = 0; i < this.totalPositions; i++) {
      board[i] = ''; // Empty positions
    }
    return board;
  }

  rollDice() {
    this.diceResult = Math.floor(Math.random() * 6) + 1;
    this.makeMove();
  }

  currentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  makeMove() {
    const player = this.currentPlayer();
    let moved = false;

    // Logic to move pieces
    for (let i = 0; i < player.positions.length; i++) {
      const pos = player.positions[i];
      const newPos = pos + this.diceResult;

      if (newPos <= this.totalPositions) {
        player.positions[i] = newPos;
        this.board[newPos] = player.color;
        moved = true;
        break;
      }
    }

    if (moved && player.positions.every(pos => pos === this.totalPositions)) {
      this.winner = player.name;
    } else {
      this.nextTurn();
    }
  }

  nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.numPlayers;
  }

  resetGame() {
    this.initializeGame();
  }

  getBoardKeys(): string[] {
    return Object.keys(this.board);
  }

  getCellClass(pos: string): string {
    if (pos.includes('home')) {
      return `${pos.split('_')[1]}-home`; // E.g., red-home, blue-home
    } else {
      return 'normal-cell';
    }
  }

  getPieceIcon(color: string): string {
    switch (color) {
      case 'red': return 'fas fa-circle red-icon';
      case 'blue': return 'fas fa-circle blue-icon';
      case 'green': return 'fas fa-circle green-icon';
      case 'yellow': return 'fas fa-circle yellow-icon';
      default: return '';
    }
  }
}
