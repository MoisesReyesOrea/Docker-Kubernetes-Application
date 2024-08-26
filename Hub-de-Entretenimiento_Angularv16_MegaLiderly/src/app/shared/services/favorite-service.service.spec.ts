import { TestBed } from '@angular/core/testing';
import { ItemModel } from 'src/app/core/models/item.model';
import { FavoriteServiceService } from './favorite-service.service';

describe('FavoriteServiceService', () => {
  let service: FavoriteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to favorite list if not already present', () => {
    const item: ItemModel = { name: 'Test Movie', description: 'Test Description' };
    service.setSelectedItem(item);
    const list = service.getSelectedItemList();
    expect(list.length).toBe(1);
    expect(list[0]).toEqual(item);
  });

  it('should not add duplicate item to favorite list', () => {
    const item: ItemModel = { name: 'Test Movie', description: 'Test Description' };
    service.setSelectedItem(item);
    service.setSelectedItem(item);  // Adding the same item again
    const list = service.getSelectedItemList();
    expect(list.length).toBe(1);
  });

  it('should confirm item is in list', () => {
    const item: ItemModel = { name: 'Test Movie', description: 'Test Description' };
    service.setSelectedItem(item);
    expect(service.isItemInList(item)).toBeTrue();
  });

  it('should confirm item is not in list', () => {
    const item: ItemModel = { name: 'Test Movie', description: 'Test Description' };
    expect(service.isItemInList(item)).toBeFalse();
  });

  it('should add multiple different items to favorite list', () => {
    const item1: ItemModel = { name: 'Test Movie 1', description: 'Test Description 1' };
    const item2: ItemModel = { name: 'Test Movie 2', description: 'Test Description 2' };
    service.setSelectedItem(item1);
    service.setSelectedItem(item2);
    const list = service.getSelectedItemList();
    expect(list.length).toBe(2);
    expect(list).toContain(item1);
    expect(list).toContain(item2);
  });
});
