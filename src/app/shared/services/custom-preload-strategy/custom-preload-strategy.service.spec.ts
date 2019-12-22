import { TestBed } from '@angular/core/testing';

import { CustomPreloadStrategyService } from './custom-preload-strategy.service';

describe('CustomPreloadStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloadStrategyService = TestBed.get(CustomPreloadStrategyService);
    expect(service).toBeTruthy();
  });
});
