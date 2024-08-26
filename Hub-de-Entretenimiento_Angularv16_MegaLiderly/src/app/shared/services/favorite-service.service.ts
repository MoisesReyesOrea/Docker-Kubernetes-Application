import { Injectable } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  private favoriteList: Array<ItemModel> = [];

  setSelectedItem(itemFavorite: any) {
    // Validando si la pelicula ya se encuentra en la lista no se agrega
    if (this.isItemInList(itemFavorite)) {
      console.log('La película ya está en la lista');
    } 
    // Si no se encuentra se agrega a la lista
    else {
      this.favoriteList.push(itemFavorite);
      console.log('Película añadida:', itemFavorite);
    }
  }
  // Validando si la pelicula ya se encuentra en la lista por sus atributos name y description
  isItemInList(Item: ItemModel): boolean {
    return this.favoriteList.find(m => m.name === Item.name && m.description === Item.description) !== undefined;
  }

  getSelectedItemList() {
    return this.favoriteList;
  }

  constructor() { }
}

