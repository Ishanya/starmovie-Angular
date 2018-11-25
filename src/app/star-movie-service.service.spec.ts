import { TestBed } from '@angular/core/testing';

import { StarMovieServiceService } from './star-movie-service.service';

describe('StarMovieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarMovieServiceService = TestBed.get(StarMovieServiceService);
    expect(service).toBeTruthy();
  });
});
