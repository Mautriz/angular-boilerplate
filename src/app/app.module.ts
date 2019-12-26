import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { NgrxConfigModule } from "./ngrx/ngrx.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { AuthModule } from "./auth/auth.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

function AppInizialer() {
  return new Promise(resolve => {
    resolve();
  });
}

export const TranslationLoader = {
  provide: TranslateLoader,
  useFactory: HttpLoaderFactory,
  deps: [HttpClient]
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    NgrxConfigModule,
    TranslateModule.forRoot({
      loader: TranslationLoader
    })
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useValue: AppInizialer,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
