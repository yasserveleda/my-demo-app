import { TestBed, inject } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


describe('MoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });
  });

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
   });
});
