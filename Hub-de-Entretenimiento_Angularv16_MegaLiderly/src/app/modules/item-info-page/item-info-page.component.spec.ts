import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoPageComponent } from './item-info-page.component';
import { CardBigComponent } from 'src/app/shared/components/card-big/card-big.component';

describe('ItemInfoPageComponent', () => {
  let component: ItemInfoPageComponent;
  let fixture: ComponentFixture<ItemInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInfoPageComponent,
        CardBigComponent
      ]
    });
    fixture = TestBed.createComponent(ItemInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
