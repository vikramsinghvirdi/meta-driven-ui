import { TestBed } from '@angular/core/testing';

import { WidgetLibraryService } from './widget-library.service';

describe('WidgetLibraryService', () => {
  let service: WidgetLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
