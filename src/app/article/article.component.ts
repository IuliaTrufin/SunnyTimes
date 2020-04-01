import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataSourceService } from "../services/datasource.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataSourceService: DataSourceService
  ) {}
  dataSource: any;
  category: string;
  id: number;
  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get("category");
    this.id = +this.activatedRoute.snapshot.paramMap.get("id");

    this.dataSource = this.dataSourceService.rules
      .filter(x => x.category == this.category)[0]
      .source()
      .filter(x => x.id == this.id)[0];
  }
}
