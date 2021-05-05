import { TestBed } from '@angular/core/testing';

import { WikipediaDataService } from './wikipedia-data.service';

describe('WikipediaDataService', () => {
  let service: WikipediaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikipediaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
