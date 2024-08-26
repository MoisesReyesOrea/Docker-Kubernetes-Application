import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/core/models/item.model';
import { ItemServiceService } from '../../services/item-service.service';
import { FavoriteServiceService } from '../../services/favorite-service.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.css']
})
export class CardBigComponent {
  @Input() item: ItemModel = {
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

constructor(private historyItem: HistoryService ,private favoriteItem: FavoriteServiceService, private itemService: ItemServiceService, private router: Router){}

goto($event: any): void {
  this.itemService.setSelectedItem(this.item);
  // Agregar al historial de visitas
  this.historyItem.setSelectedItem(this.item);
  this['router'].navigate (['/','play'])
}
hide($event: any): void{
  // Muestra mensaje (Alert)
  console.log("ocultado");
}
addFavorites(){
  // console.log(this.item.name);
  this.favoriteItem.setSelectedItem(this.item);
  // console.log(this.favoriteItem);
  
}
}
