import { Component } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';

import * as dataRaw from "./../../data/series.json"
// import * as data1Raw from "./../../data/series.json"


@Component({
  selector: 'app-section-videos',
  templateUrl: './section-videos.component.html',
  styleUrls: ['./section-videos.component.css']
})
export class SectionVideosComponent {

  popularList: Array<ItemModel> = [];
  
  
  constructor(){
  }

  ngOnInit(){
    const {data}: any = (dataRaw as any).default;
    // const {data1}: any = (data1Raw as any).default;
    this.popularList = data;
  }
}
