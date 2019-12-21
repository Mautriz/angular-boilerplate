import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthModule } from "./auth/auth.module";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    AuthModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild()
  ]
})
export class SharedModule {}
