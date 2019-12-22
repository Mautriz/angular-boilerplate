import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { CustomPreloadStrategy } from "./shared/services/custom-preload-strategy/custom-preload-strategy.service";

const routes: Routes = [
  {
    path: "page-not-found",
    component: NotFoundComponent
  },
  {
    path: "",
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule),
    data: { preload: true }
  },

  {
    path: "**",
    redirectTo: "page-not-found"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
