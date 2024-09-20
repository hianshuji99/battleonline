import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Component/home/home.component';
import { GameLobbyComponent } from '../Component/game-lobby/game-lobby.component';
import { GameDetailsComponent } from '../Component/game-details/game-details.component';
import { PlayerProfileComponent } from '../Component/player-profile/player-profile.component';
import { LeaderboardComponent } from '../Component/leaderboard/leaderboard.component';
import { ChatCommunityComponent } from '../Component/chat-community/chat-community.component';
import { TournamentsComponent } from '../Component/tournaments/tournaments.component';
import { FaqComponent } from '../Component/faq/faq.component';
import { AboutComponent } from '../Component/about/about.component';
import { NgModule } from '@angular/core';
import { ChessComputerComponent } from '../Component/chess-computer/chess-computer.component';
import { FooterComponent } from '../Component/footer/footer.component';
import { TicTacToeComponent } from '../Component/tic-tac-toe/tic-tac-toe.component';
import { LudoComponent } from '../Component/ludo/ludo.component';
import { SnakeGameComponent } from '../Component/snake-game/snake-game.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'game-lobby', component: GameLobbyComponent },
    { path: 'game-details/:id', component: GameDetailsComponent },
    { path: 'profile', component: PlayerProfileComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: 'chat-community', component: ChatCommunityComponent },
    { path: 'chess-computer', component: ChessComputerComponent },
    { path: 'tournaments', component: TournamentsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'about', component: AboutComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'tic-tac-toe', component: TicTacToeComponent },
    { path: 'ludo', component: LudoComponent },
    { path: 'snake-game', component: SnakeGameComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];

    @NgModule({
      imports: [
        RouterModule.forRoot(routes, {
          scrollPositionRestoration: 'top',
          anchorScrolling: 'enabled',
          initialNavigation: 'enabledBlocking'
        })
      ],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
  
  