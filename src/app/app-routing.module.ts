import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "page-not-found",
    component: NotFoundComponent
  },
  {
    path: "",
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },

  {
    path: "**",
    redirectTo: "page-not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
