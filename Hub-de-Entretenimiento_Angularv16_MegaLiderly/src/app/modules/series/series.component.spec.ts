import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesComponent } from './series.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesComponent,
        CardComponent
      ]
    });
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
