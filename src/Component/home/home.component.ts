import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule,FooterComponent]
})

export class HomeComponent {
  featuredGames = [
    { id: 1, name: 'Battle Royale', image: 'https://cdn2.unrealengine.com/fnbr-31-00-c5s4-discoverplaylisttiles-br-1920x1080-1920x1080-71aa603792ec.jpg' },
    { id: 2, name: 'Chess Master', image: 'https://images.crazygames.com/chess-free_16x9/20240820031635/chess-free_16x9-cover?auto=format,compress&q=75&cs=strip' },
    { id: 3, name: 'Puzzle Quest', image: 'https://m.media-amazon.com/images/I/61uRB-YJZbL.jpg' },
    { id: 4, name: 'Tic Tac Toe', image: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/d07c1db617a36898b5e8c71013d228d11003eb36d7150b7abfe988fe097c7d66.png' },
    { id: 5, name: 'Ludo', image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1697187261/catalog/1712748083016130560/bkyi5dukewsqzsa6tg3e.jpg' },
    { id: 6, name: 'Super Mario', image: 'https://s3-alpha.figma.com/hub/file/2098020863/c7761f65-9165-4131-894d-42f6e146462e-cover.png' },
    { id: 7, name: 'Snake Game', image: 'https://m.media-amazon.com/images/I/81t8t9TyYLL.png' }
  ];  
  
}
