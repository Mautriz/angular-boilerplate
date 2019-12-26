import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({
        url: req.url.startsWith("/")
          ? `http://localhost:8080${req.url}`
          : req.url
      })
    );
  }
  constructor() {}
}
