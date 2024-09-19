import { Component } from '@angular/core';

@Component({
  selector: 'app-player-profile',
  
  templateUrl: './player-profile.component.html',
  styleUrl: './player-profile.component.css'
})
export class PlayerProfileComponent {
  player = {
    name: 'John Doe',
    avatar: 'assets/player-avatar.jpg',
    gamesPlayed: 120,
    wins: 80,
    losses: 40
  };
}
