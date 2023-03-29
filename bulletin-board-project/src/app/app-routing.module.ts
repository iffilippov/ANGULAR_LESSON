import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecommendationsComponent } from "./pages/recommendations/recommendations.component";
import { AdvertismentComponent } from "./pages/advertisment/advertisment.component";

const routes: Routes = [
  {path: '', component: RecommendationsComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'advertisment', component: AdvertismentComponent},
//   {path: 'my-advertisments', component: MyAdvertismentsComponent},
//   {path: 'new-advertisment', component: NewAdvertismentComponent},
//   {path: 'settings', component: SettingsComponent},
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule { }