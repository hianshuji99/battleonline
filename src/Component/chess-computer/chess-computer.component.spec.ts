import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessComputerComponent } from './chess-computer.component';

describe('ChessComputerComponent', () => {
  let component: ChessComputerComponent;
  let fixture: ComponentFixture<ChessComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChessComputerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
