import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PaginatorModel } from '../../models/paginator.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  upcomingList: Array<PaginatorModel> = [];
  popularList: Array<PaginatorModel> = [];

  constructor(private moviesService: MoviesService) {
    this.getPopularMovies(1);
  }

  getPopularMovies(page: number) {
    this.moviesService.getPopular(page).subscribe(res => {
      this.popularList = res.results;
      this.upcomingList = this.popularList;
    });
  }

  getUpComingMovies(page: number) {
    this.moviesService.getUpComingMovies(page).subscribe(res => {
      this.upcomingList = res.results;
    });
  }
}
