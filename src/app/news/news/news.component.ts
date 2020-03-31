import { Component, OnInit } from "@angular/core";
import { DataSourceService } from "src/app/services/datasource.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  
  constructor(public datasource: DataSourceService) {}

  ngOnInit(): void {}
}
