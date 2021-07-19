import { TestBed } from '@angular/core/testing';

import { AgronomoService } from './agronomo.service';

describe('AgronomoService', () => {
  let service: AgronomoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgronomoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
