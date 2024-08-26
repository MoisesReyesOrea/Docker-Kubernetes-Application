import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayVideoPageComponent } from './play-video-page.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayVideoPageRoutingModule { }
