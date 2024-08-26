import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { PlayVideoPageComponent } from './modules/play-video-page/play-video-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, loadChildren: () => import("./modules/home/home.module").then(m=>m.HomeModule) },
  {path: 'auth', loadChildren: () => import("./modules/auth/auth.module").then(m=>m.AuthModule)},
  {path: 'play', component:PlayVideoPageComponent,  loadChildren: () => import("./modules/play-video-page/play-video-page.module").then(m=>m.PlayVideoPageModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
