import { Component, HostListener, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Cell {
  x: number;
  y: number;
}

@Component({
  selector: 'app-snake-game',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {
  boardSize = 20;
  snake: Cell[] = [{ x: 10, y: 10 }];
  direction: { x: number, y: number } = { x: 0, y: 0 };
  food: Cell = this.generateFood();
  gameOver = false;
  score = 0;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.changeDirection(event.key);

    // Restart game on "Enter" key
    if (event.key === 'Enter' && this.gameOver) {
      this.resetGame();
    }
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    setInterval(() => {
      if (!this.gameOver) {
        this.moveSnake();
      }
    }, 300); // Slowed down speed
  }

  moveSnake() {
    const newHead: Cell = { x: this.snake[0].x + this.direction.x, y: this.snake[0].y + this.direction.y };

    // Check for wall collision
    if (newHead.x < 0 || newHead.x >= this.boardSize || newHead.y < 0 || newHead.y >= this.boardSize) {
      this.gameOver = true;
      return;
    }

    // Check for self collision
    if (this.snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
      this.gameOver = true;
      return;
    }

    // Add new head to snake
    this.snake.unshift(newHead);

    // Check if the snake ate the food
    if (newHead.x === this.food.x && newHead.y === this.food.y) {
      this.score++;
      this.food = this.generateFood();
    } else {
      this.snake.pop(); // Remove the tail
    }
  }

  generateFood(): Cell {
    let foodX: number, foodY: number;
    do {
      foodX = Math.floor(Math.random() * this.boardSize);
      foodY = Math.floor(Math.random() * this.boardSize);
    } while (this.snake.some(segment => segment.x === foodX && segment.y === foodY));

    return { x: foodX, y: foodY };
  }

  changeDirection(key: string) {
    switch (key) {
      case 'ArrowUp':
        if (this.direction.y === 0) this.direction = { x: 0, y: -1 };
        break;
      case 'ArrowDown':
        if (this.direction.y === 0) this.direction = { x: 0, y: 1 };
        break;
      case 'ArrowLeft':
        if (this.direction.x === 0) this.direction = { x: -1, y: 0 };
        break;
      case 'ArrowRight':
        if (this.direction.x === 0) this.direction = { x: 1, y: 0 };
        break;
    }
  }

  resetGame() {
    this.snake = [{ x: 10, y: 10 }];
    this.direction = { x: 0, y: 0 };
    this.food = this.generateFood();
    this.gameOver = false;
    this.score = 0;
  }

  isSnakeCell(x: number, y: number): boolean {
    return this.snake.some(segment => segment.x === x && segment.y === y);
  }

  isFoodCell(x: number, y: number): boolean {
    return this.food.x === x && this.food.y === y;
  }

  isSnakeHead(x: number, y: number): boolean {
    return this.snake[0].x === x && this.snake[0].y === y;
  }
}
