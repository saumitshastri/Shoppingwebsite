import { TestBed, inject } from '@angular/core/testing';

import { ProdserviceService } from './prodservice.service';

describe('ProdserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdserviceService]
    });
  });

  it('should be created', inject([ProdserviceService], (service: ProdserviceService) => {
    expect(service).toBeTruthy();
  }));
});
