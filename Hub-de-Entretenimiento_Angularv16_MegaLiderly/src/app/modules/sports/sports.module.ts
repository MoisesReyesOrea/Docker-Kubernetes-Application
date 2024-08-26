import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './sports.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SportsComponent
  ],
  imports: [
    CommonModule,
    SportsRoutingModule,
    SharedModule
  ]
})
export class SportsModule { }
