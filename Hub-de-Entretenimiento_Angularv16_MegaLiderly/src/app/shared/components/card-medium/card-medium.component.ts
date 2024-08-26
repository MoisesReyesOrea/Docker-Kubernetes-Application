import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/core/models/item.model';
import { ItemServiceService } from '../../services/item-service.service';

@Component({
  selector: 'app-card-medium',
  templateUrl: './card-medium.component.html',
  styleUrls: ['./card-medium.component.css']
})
export class CardMediumComponent {
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

constructor(private itemService: ItemServiceService, private router: Router){} // inyeccion de servicios

goto(){
  // this.router.navigate (['/','info'])
  console.log(this.item.name);
  this.itemService.setSelectedItem(this.item);
  this.router.navigate (['/','info'])
}
hide($event: any): void{
  //Alert
  console.log("ocultado");
  console.log(this.item.name);
}
}