import { Component, OnInit } from '@angular/core';
import { DataSourceService } from "src/app/services/datasource.service";

@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.scss']
})
export class InternationalComponent implements OnInit {

  constructor(public datasource: DataSourceService) { }

  ngOnInit(): void {
  }

}
