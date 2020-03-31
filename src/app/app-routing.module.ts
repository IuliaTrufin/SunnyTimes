import { NewsComponent } from './news/news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:"news", pathMatch:"full", component:NewsComponent},{path:"**", pathMatch:"full", redirectTo:"news"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
