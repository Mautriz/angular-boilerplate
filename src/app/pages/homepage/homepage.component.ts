import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/ngrx";
import { selectRouteParams } from "src/app/ngrx/router/router.selectors";
import { login } from "src/app/shared/auth/reducer/auth.actions";
import { Observable } from "rxjs";
import { User } from "src/app/shared/auth/auth.models";
import { selectUser } from "src/app/shared/auth/reducer/auth.selectors";
import { SubSink } from "subsink";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit, OnDestroy {
  subs = new SubSink();

  user$: Observable<User>;

  constructor(private store: Store<AppState>) {}

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
}
