import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';
import { Router } from '@angular/router';
import { ItemServiceService } from '../../services/item-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() item: ItemModel = {
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
    viewed:  false,
    hide: false
}
// @Output() showInfo = new EventEmitter<any>();

// onShowInfo() {
//   console.log(this.item.name);
//   this.itemService.setSelectedItem(this.item);
//   this.router.navigate (['/','info'])
// }

constructor(private itemService: ItemServiceService, private router: Router){} // inyeccion de servicios

goto(){
  console.log(this.item.name);
  this.itemService.setSelectedItem(this.item);
  this.router.navigate (['/','info'])
}
hide($event: any): void{
  //Alert
  console.log("ocultado");
  // console.log(this.item.name);
}
}
