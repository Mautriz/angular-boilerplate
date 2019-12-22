import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpClient,
  HttpHeaders
} from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
/** Pass untouched request through to the next request handler. */
@Injectable()
export class JwtRefreshInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(() => {
        return next.handle(
          new HttpRequest("POST", "/refresh_token", {
            access_token: "",
            refresh_token: ""
          })
        );
      })
    );
  }
}
