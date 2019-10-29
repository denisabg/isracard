import { TestBed, inject } from '@angular/core/testing';

import { SearchDataServiceService } from './search-data-service.service';

describe('SearchDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchDataServiceService]
    });
  });

  it('should be created', inject([SearchDataServiceService], (service: SearchDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
