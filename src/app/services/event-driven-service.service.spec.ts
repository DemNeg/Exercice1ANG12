import { TestBed } from '@angular/core/testing';

import { EventDrivenServiceService } from './event-driven-service.service';

describe('EventDrivenServiceService', () => {
  let service: EventDrivenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDrivenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
