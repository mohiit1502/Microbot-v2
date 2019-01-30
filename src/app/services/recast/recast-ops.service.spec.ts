import { TestBed, inject } from '@angular/core/testing';

import { RecastOpsService } from './recast-ops.service';

describe('RecastOpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecastOpsService]
    });
  });

  it('should be created', inject([RecastOpsService], (service: RecastOpsService) => {
    expect(service).toBeTruthy();
  }));
});
