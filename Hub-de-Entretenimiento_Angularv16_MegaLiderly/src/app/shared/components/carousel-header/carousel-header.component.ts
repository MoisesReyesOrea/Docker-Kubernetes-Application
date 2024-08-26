import { Component, Input } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-carousel-header',
  templateUrl: './carousel-header.component.html',
  styleUrls: ['./carousel-header.component.css']
})
export class CarouselHeaderComponent {
@Input() popularList: Array<ItemModel> = [];
}
