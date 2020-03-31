import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./menu/sidenav/sidenav.component";
import { NewsComponent } from "./news/news/news.component";
import { NewsCardComponent } from "./news-card/news-card/news-card.component";
import { BusinessComponent } from "./business/business.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NewsComponent,
    NewsCardComponent,
    BusinessComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
