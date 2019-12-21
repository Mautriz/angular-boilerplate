import { Component } from "@angular/core";
@Component({
  selector: "main-layout",
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-not-found></app-not-found>
  `
})
export class LayoutComponent {}
