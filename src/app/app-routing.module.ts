import { NewsComponent } from "./news/news/news.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusinessComponent } from "./business/business.component";
import { LifeComponent } from "./life/life.component";
import { SportsComponent } from "./sports/sports.component";
import { NationalComponent } from "./national/national.component";
import { ArticleComponent } from "./article/article.component";
import { InternationalComponent } from "./international/international.component";

const routes: Routes = [
  { path: "business", pathMatch: "full", component: BusinessComponent },
  { path: "life", pathMatch: "full", component: LifeComponent },
  { path: "sports", pathMatch: "full", component: SportsComponent },
  { path: "national", pathMatch: "full", component: NationalComponent },
  {
    path: "international",
    pathMatch: "full",
    component: InternationalComponent
  },
  { path: "news", pathMatch: "full", component: NewsComponent },
  { path: "article/:id", pathMatch: "full", component: ArticleComponent },
  { path: "**", pathMatch: "full", redirectTo: "news" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
