import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [NotFoundComponent, HeaderComponent],
  imports: [CommonModule, HttpClientModule, TranslateModule],
  exports: [NotFoundComponent, HeaderComponent]
})
export class SharedModule {}
