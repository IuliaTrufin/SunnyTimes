import { NewsComponent } from "./news/news/news.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusinessComponent } from "./business/business.component";

const routes: Routes = [
  { path: "business", pathMatch: "full", component: BusinessComponent },
  // {path:"life", pathMatch:"full", component:LifeComponent},
  // {path:"sports", pathMatch:"full", component:SportsComponent},
  // {path:"national", pathMatch:"full", component:NationalComponent},
  // {path:"international", pathMatch:"full", component:InternationalComponent},
  { path: "news", pathMatch: "full", component: NewsComponent },
  { path: "**", pathMatch: "full", redirectTo: "news" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
