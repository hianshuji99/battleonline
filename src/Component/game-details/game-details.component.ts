import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-game-details',
  standalone: true,
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
  imports: [
    CommonModule,FooterComponent
  ]
})
export class GameDetailsComponent implements OnInit {
  game: any;

  games = [
    { 
      id: 1, 
      name: 'Battle Royale', 
      image: '', 
      description: 'An all-out war where you fight to be the last player standing. Engage in a fast-paced arena with a shrinking battlefield. The ultimate test of survival and skill!' 
    },
    { 
      id: 2, 
      name: 'Chess Master', 
      image: '', 
      description: 'Master the classic game of Chess! Challenge your mind with every move, and see if you have what it takes to become the next Chess Grandmaster!' 
    },
    { 
      id: 3, 
      name: 'Puzzle Quest', 
      image: '', 
      description: 'Test your wit and skills in Puzzle Quest! Solve mind-bending puzzles to move ahead. Do you have what it takes to conquer the quest?' 
    },
    { 
      id: 4, 
      name: 'Tic Tac Toe', 
      image: '', 
      description: 'Enjoy a classic game of Tic Tac Toe! Challenge your friends or the computer in this simple yet strategic game where you aim to line up three of your symbols in a row.' 
    },
    { 
      id: 5, 
      name: 'Ludo', 
      image: '', 
      description: 'Play the classic game of Ludo! Roll the dice, move your tokens around the board, and try to get all your tokens to the finish line before your opponents.' 
    },
    { 
      id: 6, 
      name: 'Super Mario', 
      image: '', 
      description: 'Join Mario on a classic platform adventure! Jump, run, and explore various worlds to rescue Princess Peach and defeat Bowser in this iconic game.' 
    },
    { 
      id: 7, 
      name: 'Snake Game', 
      image: '', 
      description: 'Play the classic Snake Game! Navigate the snake to eat the food and grow longer, but be careful not to hit the walls or yourself!' 
    }
  ];
  
  

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const gameId = +(this.route.snapshot.paramMap.get('id') || '0');
    this.game = this.games.find(g => g.id === gameId);
  }

  playVsComputer(): void {
    if (this.game && this.game.name === 'Chess Master') {
      this.router.navigate(['/chess-computer']);
    }
    else if (this.game && this.game.name === 'Battle Royale') {
      this.router.navigate(['/battle-royale']);
    }
    else if (this.game && this.game.name === 'Puzzle Quest') {
      this.router.navigate(['/puzzle-quest']);
    }
    else if (this.game && this.game.name === 'Tic Tac Toe') {
      this.router.navigate(['/tic-tac-toe']);
    }
      else if (this.game && this.game.name === 'Ludo') {
      this.router.navigate(['/ludo']);
    }
    else if (this.game && this.game.name === 'Super Mario') {
      this.router.navigate(['/super-mario']);
  }
  else if (this.game && this.game.name === 'Snake Game') {
      this.router.navigate(['/snake-game']);
    }
    else {
      this.router.navigate(['/home']);
    }
}
  playOnline(): void {
    // Implement online play logic here
  }
  goHome(): void {
    this.router.navigate(['/home']);
  }
}
