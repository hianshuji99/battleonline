import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  players = [
    { rank: 1, name: 'Alice', wins: 100, losses: 20 },
    { rank: 2, name: 'Bob', wins: 90, losses: 30 },
    { rank: 3, name: 'Charlie', wins: 85, losses: 35 }
  ];
}
