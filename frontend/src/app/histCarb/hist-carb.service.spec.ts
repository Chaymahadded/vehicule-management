import { TestBed } from '@angular/core/testing';

import { HistCarbService } from './hist-carb.service';

describe('HistCarbService', () => {
  let service: HistCarbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistCarbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
