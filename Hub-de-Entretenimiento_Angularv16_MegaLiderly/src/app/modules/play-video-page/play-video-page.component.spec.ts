import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideoPageComponent } from './play-video-page.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayVideoPageComponent', () => {
  let component: PlayVideoPageComponent;
  let fixture: ComponentFixture<PlayVideoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule
      ],
      declarations: [PlayVideoPageComponent]
    });
    fixture = TestBed.createComponent(PlayVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
