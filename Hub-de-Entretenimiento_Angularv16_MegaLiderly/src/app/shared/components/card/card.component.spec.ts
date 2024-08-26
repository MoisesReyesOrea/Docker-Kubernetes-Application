import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Router } from '@angular/router';
import { ItemServiceService } from '../../services/item-service.service';
import { ItemModel } from 'src/app/core/models/item.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockItemService: jasmine.SpyObj<ItemServiceService>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockItemService = jasmine.createSpyObj('ItemServiceService', ['setSelectedItem']);

    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ItemServiceService, useValue: mockItemService }
      ]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default item', () => {
    expect(component.item).toEqual({
      _id: 0,
      name: "string",
      year: 0,
      date: "",
      director: "",
      genre: "",
      type: "",
      description: "",
      img: "",
      favorite: false,
      viewed: false,
      hide: false
    });
  });

  it('should call setSelectedItem and navigate to /info when goto is called', () => {
    const testItem: ItemModel = {
      _id: 1,
      name: "Test Movie",
      year: 2020,
      date: "2020-01-01",
      director: "Test Director",
      genre: "Test Genre",
      type: "Test Type",
      description: "Test Description",
      img: "test.jpg",
      favorite: false,
      viewed: false,
      hide: false
    };

    component.item = testItem;
    component.goto();

    expect(mockItemService.setSelectedItem).toHaveBeenCalledWith(testItem);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/', 'info']);
  });

  it('should log item name when goto is called', () => {
    spyOn(console, 'log');
    component.goto();
    expect(console.log).toHaveBeenCalledWith(component.item.name);
  });
});
