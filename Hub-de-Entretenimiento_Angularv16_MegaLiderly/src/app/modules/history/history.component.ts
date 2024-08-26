import { Component } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';
import { HistoryService } from 'src/app/shared/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  historyList: Array<ItemModel> = [];

  constructor(private itemList: HistoryService){}

  ngOnInit() {
    this.historyList = this.itemList.getSelectedItemList();
    console.log(this.historyList);
  }

}
