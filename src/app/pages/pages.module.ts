import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LayoutComponent } from "./main-layout.component";
import { TranslateModule } from "@ngx-translate/core";
import { TranslationLoader } from "../app.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    TranslateModule.forChild({ loader: TranslationLoader })
  ],
  declarations: [LayoutComponent]
})
export class PagesModule {}
