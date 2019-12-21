import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [AuthModule, CommonModule]
})
export class SharedModule {}
