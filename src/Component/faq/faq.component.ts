import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    { question: 'How do I play?', answer: 'Select a game from the Game Lobby and start playing.' },
    { question: 'Can I play without an account?', answer: 'Yes, but an account is required for tournaments.' }
  ];
}
