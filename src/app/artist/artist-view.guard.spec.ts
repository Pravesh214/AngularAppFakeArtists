import { TestBed, async, inject } from '@angular/core/testing';

import { ArtistViewGuard } from './artist-view.guard';

describe('ArtistViewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistViewGuard]
    });
  });

  it('should ...', inject([ArtistViewGuard], (guard: ArtistViewGuard) => {
    expect(guard).toBeTruthy();
  }));
});
