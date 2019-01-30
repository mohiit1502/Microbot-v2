import { TestBed, inject } from '@angular/core/testing';

import { DomOpsService } from './dom-ops.service';

describe('DomOpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomOpsService]
    });
  });

  it('should be created', inject([DomOpsService], (service: DomOpsService) => {
    expect(service).toBeTruthy();
  }));
});
