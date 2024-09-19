import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-lobby',
  standalone: true,
  imports: [
    CommonModule, // This is needed for ngIf, ngFor, and ngClass
    FormsModule
  ],
  templateUrl: './game-lobby.component.html',
  styleUrl: './game-lobby.component.css'
})
export class GameLobbyComponent implements OnInit {
  games = [
    { 
      id: 1, 
      name: 'Battle Royale', 
      image: 'assets/battle-royale.jpg', 
      description: 'An all-out war where you fight to be the last player standing. Engage in a fast-paced arena with a shrinking battlefield. The ultimate test of survival and skill!' 
    },
    { 
      id: 2, 
      name: 'Chess Master', 
      image: 'assets/chess.jpg', 
      description: 'Master the classic game of Chess! Challenge your mind with every move, and see if you have what it takes to become the next Chess Grandmaster!' 
    },
    { 
      id: 3, 
      name: 'Puzzle Quest', 
      image: 'assets/puzzle-quest.jpg', 
      description: 'Test your wit and skills in Puzzle Quest! Solve mind-bending puzzles to move ahead. Do you have what it takes to conquer the quest?' 
    },
    { 
      id: 4, 
      name: 'Tic Tac Toe', 
      image: 'assets/tic-tac-toe.jpg', 
      description: 'Enjoy a classic game of Tic Tac Toe! Challenge your friends or the computer in this simple yet strategic game where you aim to line up three of your symbols in a row.' 
    },
    { 
      id: 5, 
      name: 'Ludo', 
      image: 'assets/ludo.jpg', 
      description: 'Play the classic game of Ludo! Roll the dice, move your tokens around the board, and try to get all your tokens to the finish line before your opponents.' 
    },
    { 
      id: 6, 
      name: 'Super Mario', 
      image: 'assets/super-mario.jpg', 
      description: 'Join Mario on a classic platform adventure! Jump, run, and explore various worlds to rescue Princess Peach and defeat Bowser in this iconic game.' 
    }
  ];
  
  constructor(private router: Router) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  startGame(gameId: number): void {
    this.router.navigate([`/game-details/${gameId}`]);
  }
}
