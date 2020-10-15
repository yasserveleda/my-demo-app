import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PaginatorModel } from '../../models/paginator.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  resultsList: Array<PaginatorModel> = [];
  noImageCard = `/assets/img/noimage.png`;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        const searchValue = params.value;
        this.searchMovies(searchValue);
      }
    );
  }

  searchMovies(value) {
    this.moviesService.searchMovies(value, 1).subscribe(res => {
      this.resultsList = res.results;
    });
  }

}
