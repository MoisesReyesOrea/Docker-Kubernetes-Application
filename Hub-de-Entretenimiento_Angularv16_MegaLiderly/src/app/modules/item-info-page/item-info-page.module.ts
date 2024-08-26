import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemInfoPageRoutingModule } from './item-info-page-routing.module';
import { ItemInfoPageComponent } from './item-info-page.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    ItemInfoPageComponent
  ],
  imports: [
    CommonModule,
    ItemInfoPageRoutingModule,
    SharedModule
]
})
export class ItemInfoPageModule { }
