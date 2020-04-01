import { Component, OnInit } from '@angular/core';
import { DataSourceService } from "src/app/services/datasource.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  constructor(public datasource: DataSourceService) { }

  ngOnInit(): void {
  }

}
