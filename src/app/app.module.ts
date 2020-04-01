import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./menu/sidenav/sidenav.component";
import { NewsComponent } from "./news/news/news.component";
import { NewsCardComponent } from "./news-card/news-card/news-card.component";
import { BusinessComponent } from "./business/business.component";
import { LifeComponent } from "./life/life.component";
import { NationalComponent } from "./national/national.component";
import { InternationalComponent } from "./international/international.component";
import { SportsComponent } from "./sports/sports.component";
import { ArticleComponent } from "./article/article.component";
import { DataSourceService } from "./services/datasource.service";
import { CategoryComponent } from './category/category.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { OverlayComponentComponent } from "./overlay-component/overlay-component.component";
import { LoginServiceService } from "./login-service.service";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NewsComponent,
    NewsCardComponent,
    BusinessComponent,
    LifeComponent,
    SportsComponent,
    NationalComponent,
    InternationalComponent,
    ArticleComponent,
    CategoryComponent,
    ArticleCreateComponent,
    OverlayComponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DataSourceService, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
