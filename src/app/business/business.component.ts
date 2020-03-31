import { Component, OnInit } from '@angular/core';
import { DataSourceService } from "src/app/services/datasource.service";

@Component({
  selector: "app-business",
  templateUrl: "./business.component.html",
  styleUrls: ["./business.component.scss"]
})
export class BusinessComponent implements OnInit {

  constructor(public datasource: DataSourceService) { }

  ngOnInit(): void {}
}

