import { TestBed } from '@angular/core/testing';

import { JustServiceService } from './just-service.service';

describe('JustServiceService', () => {
  let service: JustServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JustServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
