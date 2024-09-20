import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCard, MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatRippleModule } from '@angular/material/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import your components
import { HomeComponent } from '../Component/home/home.component';
import { GameLobbyComponent } from '../Component/game-lobby/game-lobby.component';
import { GameDetailsComponent } from '../Component/game-details/game-details.component';
import { PlayerProfileComponent } from '../Component/player-profile/player-profile.component';
import { LeaderboardComponent } from '../Component/leaderboard/leaderboard.component';
import { ChatCommunityComponent } from '../Component/chat-community/chat-community.component';
import { TournamentsComponent } from '../Component/tournaments/tournaments.component';
import { FaqComponent } from '../Component/faq/faq.component';
import { AboutComponent } from '../Component/about/about.component';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ChessComputerComponent } from '../Component/chess-computer/chess-computer.component';
import { TicTacToeComponent } from '../Component/tic-tac-toe/tic-tac-toe.component';
import { LudoComponent } from '../Component/ludo/ludo.component';
import { SnakeGameComponent } from '../Component/snake-game/snake-game.component';
NgModule({
  declarations: [AppComponent, LeaderboardComponent, ChatCommunityComponent, TournamentsComponent, FaqComponent, AboutComponent,
    HomeComponent,ChessComputerComponent,
    GameDetailsComponent,GameLobbyComponent,
    TicTacToeComponent,LudoComponent,
    SnakeGameComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    MatCardTitle,
    ReactiveFormsModule,
    MatIconModule,
    MatCardContent,
    MatExpansionModule,
    MatCardTitle,
    MatExpansionPanelHeader,
    
    // Other imports
  ],
  bootstrap: [AppComponent],
})

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
};
