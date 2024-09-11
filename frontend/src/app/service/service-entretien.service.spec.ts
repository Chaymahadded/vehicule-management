import { TestBed } from '@angular/core/testing';

import { ServiceEntretienService } from './service-entretien.service';

describe('ServiceEntretienService', () => {
  let service: ServiceEntretienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEntretienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
