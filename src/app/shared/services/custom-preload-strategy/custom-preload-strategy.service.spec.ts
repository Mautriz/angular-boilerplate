import { TestBed } from "@angular/core/testing";
import { CustomPreloadStrategy } from "./custom-preload-strategy.service";

describe("CustomPreloadStrategyService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CustomPreloadStrategy = TestBed.get(CustomPreloadStrategy);
    expect(service).toBeTruthy();
  });
});
