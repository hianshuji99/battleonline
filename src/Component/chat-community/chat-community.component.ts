import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-community',
  
  templateUrl: './chat-community.component.html',
  styleUrl: './chat-community.component.css'
})
export class ChatCommunityComponent {
  messages = [
    { user: 'Alice', text: 'Hey, who’s up for a game?' },
    { user: 'Bob', text: 'I’m in!' }
  ];

  newMessage: string = '';

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({ user: 'You', text: this.newMessage });
      this.newMessage = '';
    }
  }
}
