import { Injectable } from "@angular/core";

Injectable({ providedIn: "root" });
export class DataSourceService {
  getDataSource() {
    return [
      {
        id: 1,
        title: "Some Title here",
        content:
          "article content that should be pretty long to look fine but it actually doesn't matter asdasdasdasdasdasdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaa",
        image: "assets/pics/business/business1.jpg"
      },
      {
        id: 2,
        title: "Another title here",
        content:
          "another article content that also has to be pretty long and doesn't matter, like 4 lines long adasdasdadaaaaaaaaaaaaaaaaaaaaa",
        image: "./assets/pics/business/business2.JPG"
      }
    ];
  }
}
