import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap } from "rxjs/operators";
import { of } from "rxjs";

import * as AuthActions from "./auth.actions";

@Injectable()
export class AuthEffects {
  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      map(() =>
        AuthActions.loginSuccess({
          user: {
            id: "33",
            username: "Marco"
          }
        })
      )
    );
  });

  constructor(private actions$: Actions) {}
}
