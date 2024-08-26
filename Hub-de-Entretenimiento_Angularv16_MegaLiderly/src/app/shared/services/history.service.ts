import { Injectable } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private historyList: Array<ItemModel> = [];


  setSelectedItem(itemhistory: any) {
    // Validando, si se encuentra en la lista no se agrega
    if (this.isItemInList(itemhistory)) {
      console.log('La película ya está en la lista');
    } 
    // Si no se encuentra se agrega a la lista
    else {
      this.historyList.push(itemhistory);
      console.log('Película añadida:', itemhistory);
    }
  }
  // Validando si el elemento ya se encuentra en la lista por sus atributos name y description
  isItemInList(Item: ItemModel): boolean {
    return this.historyList.find(m => m.name === Item.name && m.description === Item.description) !== undefined;
  }

  getSelectedItemList() {
    return this.historyList;
  }

  constructor() { }
}
