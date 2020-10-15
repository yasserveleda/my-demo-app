import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  movie: MovieModel;
  bgImage = ``;
  castList = [];
  director: any;
  screenplay: any;
  music: any;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params.id;
        this.getMovieCredits(id);
        this.getMovie(id);
      }
    );
  }

  getMovieCredits(id) {
    const movieCreditsSubs = this.moviesService.getMovieCredits(id).subscribe(
      res => {
        res.cast = res.cast.filter( item => item.profile_path);
        this.director = res.crew.filter( item => (item.job === `Director`));
        this.screenplay = res.crew.filter( item => (item.job === `Screenplay`));
        this.castList = res.cast;
      }, () => {},
      () => { if (movieCreditsSubs) { movieCreditsSubs.unsubscribe(); } }
    );
  }

  getMovie(id) {
    const movieSubs = this.moviesService.getMovie(id).subscribe(
      movie => {
        this.movie = movie;
        this.bgImage += `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`;
        if (!this.movie) {
          alert('Server Error');
        }
      }, () => {},
      () => { if (movieSubs) { movieSubs.unsubscribe(); } }
    );
  }

}
