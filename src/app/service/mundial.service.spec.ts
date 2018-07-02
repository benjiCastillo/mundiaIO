import { TestBed, inject } from '@angular/core/testing';

import { MundialService } from './mundial.service';

describe('MundialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MundialService]
    });
  });

  it('should be created', inject([MundialService], (service: MundialService) => {
    expect(service).toBeTruthy();
  }));
});
