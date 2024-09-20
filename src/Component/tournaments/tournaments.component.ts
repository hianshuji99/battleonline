import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [
    CommonModule, // This is needed for ngIf, ngFor, and ngClass
    FormsModule,
    FooterComponent
  ],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {
  tournaments = [
    { 
      name: 'Chess Championship', 
      date: '2024-10-05', 
      description: 'Compete with top players in a mind-bending chess tournament!' 
    },
    { 
      name: 'Puzzle Quest Finals', 
      date: '2024-10-10', 
      description: 'Solve puzzles and claim the title of Puzzle Quest Champion!' 
    }
  ];

  pastTournaments = [
    { 
      name: '2023 Battle Royale', 
      date: '2023-11-15', 
      winner: 'PlayerX', 
      description: 'A fierce battle where PlayerX emerged victorious in an intense final round!'
    },
    { 
      name: '2023 Chess Blitz', 
      date: '2023-09-10', 
      winner: 'GrandmasterZ', 
      description: 'An exciting tournament where GrandmasterZ defeated the best in the world.'
    }
  ];

  getTournamentStatus(date: string): string {
    const today = new Date();
    const tournamentDate = new Date(date);
    return tournamentDate >= today ? 'Upcoming' : 'Closed';
  }
}

