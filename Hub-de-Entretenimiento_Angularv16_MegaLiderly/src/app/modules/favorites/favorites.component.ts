import { Component } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';
import { FavoriteServiceService } from 'src/app/shared/services/favorite-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  favoriteList: Array<ItemModel> = [];
  item: ItemModel = {
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

constructor(private itemList: FavoriteServiceService){}

ngOnInit() {
  this.favoriteList = this.itemList.getSelectedItemList();
  console.log(this.favoriteList);
}

addFavorites(){
  // this.favoriteList.push(this.item);
  // console.log("añadido: " + this.item);
  // console.log(this.favoriteList);
}

}
