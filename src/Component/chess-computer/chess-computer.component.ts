import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Piece {
  name: string;
  color: 'black' | 'white';
  icon: string;
}

@Component({
  selector: 'app-chess-computer',
  standalone: true,
  templateUrl: './chess-computer.component.html',
  styleUrls: ['./chess-computer.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ChessComputerComponent implements OnInit, OnDestroy {
  board: any[][] = [];
  selectedPiece: { piece: Piece; row: number; col: number } | null = null;
  currentPlayer: 'black' | 'white' = 'white';
  message: string = '';
  gameTimer: any;
  elapsedTime: number = 0; // in seconds

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeBoard();
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.gameTimer);
  }

  initializeBoard(): void {
    const initialBoard = [
      ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
      Array(8).fill('pawn'),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill('pawn'),
      ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
    ];

    this.board = initialBoard.map((row, rowIndex) =>
      row.map((piece, colIndex) => ({
        index: colIndex,
        piece: piece ? this.createPiece(piece, rowIndex < 2 ? 'white' : 'black') : null,
        highlight: false
      }))
    );
    this.updateMessage();

    // Automatically move if it's the computer's turn
    if (this.currentPlayer === 'black') {
      setTimeout(() => this.makeComputerMove(), 1000); // Delay for computer move
    }
  }

  createPiece(piece: string, color: 'white' | 'black'): Piece {
    const pieceIcons: { [key: string]: string } = {
      'pawn': color === 'white' ? 'fa fa-chess-pawn' : 'fa fa-chess-pawn black',
      'rook': color === 'white' ? 'fa fa-chess-rook' : 'fa fa-chess-rook black',
      'knight': color === 'white' ? 'fa fa-chess-knight' : 'fa fa-chess-knight black',
      'bishop': color === 'white' ? 'fa fa-chess-bishop' : 'fa fa-chess-bishop black',
      'queen': color === 'white' ? 'fa fa-chess-queen' : 'fa fa-chess-queen black',
      'king': color === 'white' ? 'fa fa-chess-king' : 'fa fa-chess-king black'
    };
    return {
      name: piece.charAt(0).toUpperCase() + piece.slice(1),
      color: color,
      icon: pieceIcons[piece]
    };
  }

  selectCell(rowIndex: number, colIndex: number): void {
    const cell = this.board[rowIndex][colIndex];
    if (this.selectedPiece) {
      if (cell.highlight) {
        this.movePiece(rowIndex, colIndex);
        if (!this.checkGameEnd()) {
          this.switchPlayer();
          setTimeout(() => this.makeComputerMove(), 1000); // Delay for computer move
        }
      } else {
        this.clearHighlights();
        this.selectedPiece = null;
      }
    } else if (cell.piece && cell.piece.color === this.currentPlayer) {
      this.selectedPiece = { piece: cell.piece, row: rowIndex, col: colIndex };
      this.showValidMoves(rowIndex, colIndex, cell.piece);
    }
  }

  showValidMoves(row: number, col: number, piece: Piece): void {
    this.clearHighlights();
    const validMoves = this.getValidMoves(row, col, piece);
    validMoves.forEach(({ row, col }) => {
      this.board[row][col].highlight = true;
    });
  }

  // ... (rest of the code remains unchanged)

  checkGameEnd(): boolean {
    const whiteKing = this.board.flat().some(cell => cell.piece?.name === 'King' && cell.piece.color === 'white');
    const blackKing = this.board.flat().some(cell => cell.piece?.name === 'King' && cell.piece.color === 'black');

    if (!whiteKing) {
      this.updateMessage('Black wins!');
      this.stopTimer();
      this.showCelebration();
      return true;
    }
    if (!blackKing) {
      this.updateMessage('White wins!');
      this.stopTimer();
      this.showCelebration();
      return true;
    }
    return false;
  }
  showCelebration(): void {
    const celebrationDiv = document.createElement('div');
    celebrationDiv.className = 'celebration';
    document.body.appendChild(celebrationDiv);
  
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = Math.random() * 100 + '%';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.width = (Math.random() * 10 + 5) + 'px'; // Ensure minimum size
      confetti.style.height = confetti.style.width;
      celebrationDiv.appendChild(confetti);
    }
  
    setTimeout(() => {
      document.body.removeChild(celebrationDiv);
    }, 5000);
  }
  
  
  startTimer(): void {
    this.gameTimer = setInterval(() => {
      this.elapsedTime++;
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.gameTimer);
  }

  updateMessage(msg?: string): void {
    if (msg) {
      this.message = msg;
    } else {
      this.message = `It's ${this.currentPlayer === 'white' ? 'Player2' : 'Player1'}'s turn`;
    }
  }

  getValidMoves(row: number, col: number, piece: Piece): { row: number, col: number }[] {
    const validMoves: { row: number, col: number }[] = [];
    switch (piece.name.toLowerCase()) {
      case 'pawn':
        validMoves.push(...this.getPawnMoves(row, col, piece));
        break;
      case 'rook':
        validMoves.push(...this.getRookMoves(row, col));
        break;
      case 'knight':
        validMoves.push(...this.getKnightMoves(row, col));
        break;
      case 'bishop':
        validMoves.push(...this.getBishopMoves(row, col));
        break;
      case 'queen':
        validMoves.push(...this.getRookMoves(row, col));
        validMoves.push(...this.getBishopMoves(row, col));
        break;
      case 'king':
        validMoves.push(...this.getKingMoves(row, col));
        break;
    }
    return validMoves;
  }

  getPawnMoves(row: number, col: number, piece: Piece): { row: number, col: number }[] {
    const moves: { row: number, col: number }[] = [];
    if (piece.color === 'white') {
      if (row > 0 && !this.board[row - 1][col].piece) moves.push({ row: row - 1, col: col });
      if (row === 6 && !this.board[row - 2][col].piece) moves.push({ row: row - 2, col: col });
    } else {
      if (row < 7 && !this.board[row + 1][col].piece) moves.push({ row: row + 1, col: col });
      if (row === 1 && !this.board[row + 2][col].piece) moves.push({ row: row + 2, col: col });
    }
    return moves;
  }

  getRookMoves(row: number, col: number): { row: number, col: number }[] {
    const moves = [];
    for (let i = row - 1; i >= 0; i--) if (!this.board[i][col].piece) moves.push({ row: i, col: col }); else break;
    for (let i = row + 1; i < 8; i++) if (!this.board[i][col].piece) moves.push({ row: i, col: col }); else break;
    for (let i = col - 1; i >= 0; i--) if (!this.board[row][i].piece) moves.push({ row: row, col: i }); else break;
    for (let i = col + 1; i < 8; i++) if (!this.board[row][i].piece) moves.push({ row: row, col: i }); else break;
    return moves;
  }

  getKnightMoves(row: number, col: number): { row: number, col: number }[] {
    const moves = [];
    const potentialMoves = [
      { row: row - 2, col: col - 1 }, { row: row - 2, col: col + 1 },
      { row: row - 1, col: col - 2 }, { row: row - 1, col: col + 2 },
      { row: row + 1, col: col - 2 }, { row: row + 1, col: col + 2 },
      { row: row + 2, col: col - 1 }, { row: row + 2, col: col + 1 }
    ];
    return potentialMoves.filter(move => this.isWithinBounds(move.row, move.col));
  }

  getBishopMoves(row: number, col: number): { row: number, col: number }[] {
    const moves = [];
    for (let i = 1; i < 8; i++) {
      if (this.isWithinBounds(row - i, col - i)) moves.push({ row: row - i, col: col - i });
      if (this.isWithinBounds(row - i, col + i)) moves.push({ row: row - i, col: col + i });
      if (this.isWithinBounds(row + i, col - i)) moves.push({ row: row + i, col: col - i });
      if (this.isWithinBounds(row + i, col + i)) moves.push({ row: row + i, col: col + i });
    }
    return moves;
  }

  getKingMoves(row: number, col: number): { row: number, col: number }[] {
    const moves = [];
    const potentialMoves = [
      { row: row - 1, col: col }, { row: row + 1, col: col },
      { row: row, col: col - 1 }, { row: row, col: col + 1 },
      { row: row - 1, col: col - 1 }, { row: row - 1, col: col + 1 },
      { row: row + 1, col: col - 1 }, { row: row + 1, col: col + 1 }
    ];
    return potentialMoves.filter(move => this.isWithinBounds(move.row, move.col));
  }

  isWithinBounds(row: number, col: number): boolean {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }

  clearHighlights(): void {
    this.board.forEach(row => row.forEach(cell => cell.highlight = false));
  }

  movePiece(row: number, col: number): void {
    if (this.selectedPiece) {
      const { row: prevRow, col: prevCol } = this.selectedPiece;
      this.board[row][col].piece = this.selectedPiece.piece;
      this.board[prevRow][prevCol].piece = null;
      this.clearHighlights();
    }
  }

  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
    this.updateMessage();
  }

  

  makeComputerMove(): void {
    if (this.currentPlayer === 'black') {
      // Find all pieces of the computer
      const computerPieces = this.board.flat().filter(cell => cell.piece && cell.piece.color === 'black');
      
      // Filter out cells that have valid moves
      const validMoves = computerPieces.flatMap(pieceCell => this.getValidMoves(pieceCell.row, pieceCell.index, pieceCell.piece).map(move => ({
        from: { row: pieceCell.row, col: pieceCell.index },
        to: move
      })));
      
      if (validMoves.length > 0) {
        // Choose a random move
        const move = validMoves[Math.floor(Math.random() * validMoves.length)];
        
        // Move the piece
        this.board[move.to.row][move.to.col].piece = this.board[move.from.row][move.from.col].piece;
        this.board[move.from.row][move.from.col].piece = null;
  
        // Switch player
        this.switchPlayer();
      }
    }
  }
  

startNewGame(): void {
  this.initializeBoard();
  this.currentPlayer = 'white';
  this.selectedPiece = null;
  this.updateMessage();
  clearInterval(this.gameTimer);
  this.elapsedTime = 0; // Reset timer
  this.startTimer(); // Restart timer
}


  goBack(): void {
    this.router.navigate(['/home']);
  }
}
