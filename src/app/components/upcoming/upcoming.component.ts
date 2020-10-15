import { Component } from '@angular/core';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent {
  upcomingList: Array<PaginatorModel> = [];

  constructor(private moviesService: MoviesService) {
    this.getUpComingMovies(1);
  }

  getUpComingMovies(page: number) {
    this.moviesService.getUpComingMovies(page).subscribe(res => {
      this.upcomingList = res.results;
    });
  }
}
