import { TestBed, inject } from '@angular/core/testing';

import { PersistenceOpsService } from './persistence-ops.service';

describe('PersistenceOpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistenceOpsService]
    });
  });

  it('should be created', inject([PersistenceOpsService], (service: PersistenceOpsService) => {
    expect(service).toBeTruthy();
  }));
});
