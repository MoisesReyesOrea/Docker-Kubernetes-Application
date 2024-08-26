import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideosComponent } from './section-videos.component';
import { CarouselHeaderComponent } from 'src/app/shared/components/carousel-header/carousel-header.component';
import { CardMediumComponent } from 'src/app/shared/components/card-medium/card-medium.component';

describe('SectionVideosComponent', () => {
  let component: SectionVideosComponent;
  let fixture: ComponentFixture<SectionVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionVideosComponent,
        CarouselHeaderComponent,
        CardMediumComponent
      ]
    });
    fixture = TestBed.createComponent(SectionVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
