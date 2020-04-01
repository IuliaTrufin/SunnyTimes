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

  @Input()
  articleCategory: string;

  constructor() {}

  ngOnInit(): void {}

  getImage() {
    return this.isDouble ? `url('${this.articleData.image}')` : "none";
  }

  getContent() {
    return this.articleData.content.slice(0, 75);
  }

  getTitleContent() {
    if ((this.articleData.title as string).length < (this.isDouble ? 36 : 17)) {
      return this.articleData.title;
    }
    return this.articleData.title.substring(0, 17) + "...";
  }

  isArticleLiked() {
    return (
      localStorage.getItem(`${this.articleCategory}-${this.articleData.id}`) ==
      "true"
    );
  }

  onLikeClick() {
    localStorage.getItem(`${this.articleCategory}-${this.articleData.id}`) ==
    "true"
      ? localStorage.setItem(
          `${this.articleCategory}-${this.articleData.id}`,
          "false"
        )
      : localStorage.setItem(
          `${this.articleCategory}-${this.articleData.id}`,
          "true"
        );
  }
}
