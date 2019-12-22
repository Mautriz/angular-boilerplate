import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../ngrx";
import { selectRouteParams } from "../../ngrx/router/router.selectors";
import { Observable } from "rxjs";
import { SubSink } from "subsink";
import { selectUser } from "../../auth/reducer/auth.selectors";
import { login } from "../../auth/reducer/auth.actions";
import { User } from "../../auth/auth.models";
import { OnDemandPreloadService } from "src/app/shared/services/custom-preload-strategy/on-demand-preload.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit, OnDestroy {
  subs = new SubSink();

  user$: Observable<User>;

  constructor(
    private store: Store<AppState>,
    private preload: OnDemandPreloadService
  ) {}

  ngOnInit() {
    this.subs.sink = this.store
      .select(selectRouteParams)
      .subscribe(console.log);
    this.user$ = this.store.select(selectUser);
    this.store.dispatch(login());
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  preloadBundle(routePath: string) {
    this.preload.startPreload(routePath);
  }
}
