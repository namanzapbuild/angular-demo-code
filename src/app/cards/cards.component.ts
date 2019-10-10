import { card } from "./../../model/card";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  constructor() {}

  @Input() card: card;

  ngOnInit() {}
}
