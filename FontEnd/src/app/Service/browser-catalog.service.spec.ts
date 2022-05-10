import { TestBed } from '@angular/core/testing';

import { BrowserCatalogService } from './browser-catalog.service';

describe('BrowserCatalogService', () => {
  let service: BrowserCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
