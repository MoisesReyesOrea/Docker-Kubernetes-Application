import { Component } from '@angular/core';
import * as dataRaw from "./../../data/sports.json"
import { ItemModel } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  sportsList: Array<ItemModel> = [];

  constructor(){
  }

  ngOnInit(){
    const {data}: any = (dataRaw as any).default;
    this.sportsList = data;
  }
}
