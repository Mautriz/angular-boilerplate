import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";

import { Observable } from "rxjs";
import { tap, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/ngrx";
import { selectToken } from "../reducer/auth.selectors";
import { tokenRefresh } from "../reducer/auth.actions";
import { Token } from "../auth.models";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectToken).pipe(
      switchMap(({ access_token, refresh_token }) => {
        const newReq = req.clone({
          setHeaders: {
            access_token,
            refresh_token
          }
        });
        return next.handle(newReq).pipe(
          tap((res: HttpResponse<{ token?: Token }>) => {
            if (res.body && res.body.token) {
              this.store.dispatch(tokenRefresh({ token: res.body.token }));
            }
          })
        );
      })
    );
  }
}
