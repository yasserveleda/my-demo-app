import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: MovieModel;
  isLoading = true;
  bgImage = ``;
  // src="https://image.tmdb.org/t/p/w300/{{movie.backdrop_path}}";

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params.id;
        this.getMovie(id);

        // this.getMovieCredits(id);
        // this.getMovieImages(id);
      }
    );
  }

  getMovie(id) {
    const movieSubs = this.moviesService.getMovie(id).subscribe(
      movie => {
        this.movie = movie;
        this.bgImage += `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`;
        if (!this.movie) {
          alert('Server Error');
        } else {
          this.isLoading = false;
        }
        console.log(movie);
      }, () => {},
      () => { if (movieSubs) { movieSubs.unsubscribe(); } }
    );
  }

  getMovieCredits(id) {
    const movieCreditsSubs = this.moviesService.getMovieCredits(id).subscribe(
      res => {
        console.log(res);
        res.cast = res.cast.filter( item => item.profile_path);
        console.log(res.cast);
        // this.cast = res.cast.slice(0, 5);
      }, () => {},
      () => { if (movieCreditsSubs) { movieCreditsSubs.unsubscribe(); } }
    );
  }

  getMovieImages(id) {
    const movieCreditsSubs = this.moviesService.getMovieImages(id).subscribe(
      res => {
        console.log(res);
        // res.cast = res.cast.filter( item => item.iso_639_1);
        // console.log(res.cast);
        // this.cast = res.cast.slice(0, 5);
      }, () => {},
      () => { if (movieCreditsSubs) { movieCreditsSubs.unsubscribe(); } }
    );
  }




}
