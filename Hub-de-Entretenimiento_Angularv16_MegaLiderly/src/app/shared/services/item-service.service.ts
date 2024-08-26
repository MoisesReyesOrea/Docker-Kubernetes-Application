import { Injectable } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  // private selectedItem: any;

  private selectedItem: ItemModel = {
    _id: 0,
    name: "",
    seasons: 0,
    episodes: 0,
    tournament: "",
    year: 0,
    date: "",
    director: "",
    genre: "",
    type: "",
    description: "",
    img: "",
    favorite: false,
    viewed:  false,
    hide: false
}
  setSelectedItem(item: any) {
    this.selectedItem = item;
  }

  getSelectedItem() {
    return this.selectedItem;
  }

  constructor() { }
}
