import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesService } from './services/movies.service';
import { MovieComponent } from './components/movie/movie.component';
import { CreditsComponent } from './components/credits/credits.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: 'popular', component: HomeComponent},
  { path: 'movie/:id/detail', component: MovieComponent },
  { path: 'movie/:id/credits', component: CreditsComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**',   redirectTo: 'popular'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [
    MoviesService
  ],
})
export class AppRoutingModule { }
