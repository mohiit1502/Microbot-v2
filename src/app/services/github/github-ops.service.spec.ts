import { TestBed, inject } from '@angular/core/testing';

import { GithubOpsService } from './github-ops.service';

describe('GithubOpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubOpsService]
    });
  });

  it('should be created', inject([GithubOpsService], (service: GithubOpsService) => {
    expect(service).toBeTruthy();
  }));
});
