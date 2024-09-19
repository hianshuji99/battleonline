import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCommunityComponent } from './chat-community.component';

describe('ChatCommunityComponent', () => {
  let component: ChatCommunityComponent;
  let fixture: ComponentFixture<ChatCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatCommunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
