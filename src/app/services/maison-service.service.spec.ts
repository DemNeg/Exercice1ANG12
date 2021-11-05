import { TestBed } from '@angular/core/testing';

import { MaisonServiceService } from './maison-service.service';

describe('MaisonServiceService', () => {
  let service: MaisonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaisonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
