import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, EMPTY } from "rxjs";
import {
  OnDemandPreloadService,
  OnDemandPreloadOptions
} from "./on-demand-preload.service";
import { mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
  deps: [OnDemandPreloadService]
})
export class CustomPreloadStrategy implements PreloadingStrategy {
  preloadOnDemand$: Observable<OnDemandPreloadOptions>;

  constructor(private preloadOnDemandService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.state;
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemand$.pipe(
      mergeMap(preloadOptions => {
        const shouldPreload = this.preloadCheck(route, preloadOptions);
        console.log(shouldPreload);
        return shouldPreload ? load() : EMPTY;
      })
    );
  }

  private preloadCheck(route: Route, preloadOptions: OnDemandPreloadOptions) {
    console.log(preloadOptions, route.path);
    return (
      route.data &&
      route.data["preload"] &&
      route.path === preloadOptions.routePath &&
      preloadOptions.preload
    );
  }
}
