/** Default AngularCLI component file. */

import { TestBed } from '@angular/core/testing';

import { TwitterService } from './twitterservice.service';

describe('TwitterserviceService', () => {
  let service: TwitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
