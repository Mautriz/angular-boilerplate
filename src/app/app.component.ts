import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "learning";
  constructor(translations: TranslateService) {
    translations.setDefaultLang("en");
  }
}
