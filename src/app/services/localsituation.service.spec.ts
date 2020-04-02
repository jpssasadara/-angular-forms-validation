import { TestBed } from '@angular/core/testing';

import { LocalsituationService } from './localsituation.service';

describe('LocalsituationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalsituationService = TestBed.get(LocalsituationService);
    expect(service).toBeTruthy();
  });
});
