import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "./homepage.component";
import { HomepageRoutingModule } from "./homepage-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class HomepageModule {}
