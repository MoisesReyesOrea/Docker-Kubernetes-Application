import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionVideosRoutingModule } from './section-videos-routing.module';
import { SectionVideosComponent } from './section-videos.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    SectionVideosComponent
  ],
  imports: [
    CommonModule,
    SectionVideosRoutingModule,
    SharedModule
]
})
export class SectionVideosModule { }
