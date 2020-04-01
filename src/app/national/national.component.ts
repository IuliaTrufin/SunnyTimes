import { Component, OnInit } from '@angular/core';
import { DataSourceService } from "src/app/services/datasource.service";


@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.scss']
})
export class NationalComponent implements OnInit {

  constructor(public datasource: DataSourceService) { }

  ngOnInit(): void {
  }

}
