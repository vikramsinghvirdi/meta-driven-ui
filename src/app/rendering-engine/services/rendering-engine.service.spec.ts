import { TestBed } from '@angular/core/testing';

import { RenderingEngineService } from './rendering-engine.service';

describe('RenderingEngineService', () => {
  let service: RenderingEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderingEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
