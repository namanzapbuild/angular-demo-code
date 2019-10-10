import { card } from "./../model/card";
import { CARDS } from "./../../db-data";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "namancode";
  cards: card[] = CARDS;
}
