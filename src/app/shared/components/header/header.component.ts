import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Languages } from "../../models/language.models";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  langs = ["en", "it"];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  changeLanguage(lang: Languages) {
    console.log(lang);
    this.translate.use(lang);
  }
}
