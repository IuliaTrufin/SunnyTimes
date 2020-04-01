import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"]
})
export class NewsCardComponent implements OnInit {
  @Input("isDouble")
  isDouble: boolean = false;

  @Input("articleData")
  articleData: any;

  constructor() {}

  ngOnInit(): void {}

  getImage() {
    return this.isDouble ? `url('${this.articleData.image}')` : "none";
  }

  getContent() {
    return this.articleData.content.slice(0, 85);
  }
}
