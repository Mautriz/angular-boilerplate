import { TestBed } from "@angular/core/testing";

import { LocalForageService } from "./local-forage.service";

describe("LocalforageService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: LocalForageService = TestBed.get(LocalForageService);
    expect(service).toBeTruthy();
  });
});
