import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { SeriesComponent } from '../series/series.component';
import { SportsComponent } from '../sports/sports.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { HistoryComponent } from '../history/history.component';
import { SectionVideosComponent } from '../section-videos/section-videos.component';
import { ItemInfoPageComponent } from '../item-info-page/item-info-page.component';

const routes: Routes = [
  {path: '', component: SectionVideosComponent, loadChildren: () => import("./../section-videos/section-videos.module").then(m=>m.SectionVideosModule)},
  {path: 'movies', component: MoviesComponent, loadChildren: () => import("./../movies/movies.module").then(m=>m.MoviesModule)},
  {path: 'series', component: SeriesComponent, loadChildren: () => import("./../series/series.module").then(m=>m.SeriesModule)},
  {path: 'sports', component: SportsComponent, loadChildren: () => import("./../sports/sports.module").then(m=>m.SportsModule)},
  // {path: 'genres', component: GenresComponent},
  {path: 'favorites', component: FavoritesComponent, loadChildren: () => import("./../favorites/favorites.module").then(m=>m.FavoritesModule)},
  {path: 'history', component: HistoryComponent, loadChildren: () => import("./../history/history.module").then(m=>m.HistoryModule)},
  {path: 'info', component: ItemInfoPageComponent, loadChildren: () => import("./../item-info-page/item-info-page.module").then(m=>m.ItemInfoPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
