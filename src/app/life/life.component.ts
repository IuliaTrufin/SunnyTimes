import { Component, OnInit } from '@angular/core';
import { DataSourceService } from "src/app/services/datasource.service";


@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {

  constructor(public datasource: DataSourceService) { }

  ngOnInit(): void {
  }

}
