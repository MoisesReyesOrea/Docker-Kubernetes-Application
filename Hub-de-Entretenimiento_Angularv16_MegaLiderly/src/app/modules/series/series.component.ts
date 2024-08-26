import { Component } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';
import * as dataRaw from 'src/app/data/series.json';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  seriesList: Array<ItemModel> = [];

  constructor(){}

  ngOnInit(){
    const {data}: any = (dataRaw as any).default;
    this.seriesList = data;
  }
}
