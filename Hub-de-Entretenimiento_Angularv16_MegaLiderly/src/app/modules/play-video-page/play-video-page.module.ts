import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayVideoPageRoutingModule } from './play-video-page-routing.module';
import { PlayVideoPageComponent } from './play-video-page.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PlayVideoPageComponent
  ],
  imports: [
    CommonModule,
    PlayVideoPageRoutingModule,
    MatIconModule
  ]
})
export class PlayVideoPageModule { }
