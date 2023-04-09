import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdvertismentComponent } from "./modules/open-access/pages/advertisment/advertisment.component";
import { MyAdsComponent } from "./modules/personal-area/pages/my-ads/my-ads.component";
import { NewAdComponent } from "./modules/personal-area/pages/new-ad/new-ad.component";
import { RecommendationsComponent } from "./modules/open-access/pages/recommendations/recommendations.component";
import { SettingsComponent } from "./modules/personal-area/pages/settings/settings.component";

const routes: Routes = [
  {
    path: '',
    component: RecommendationsComponent
  },
  {
    path: 'ad/:id',
    component: AdvertismentComponent
  },
  {
    path: 'my-ads',
    component: MyAdsComponent
  },
  {
    path: 'new-ad',
    component: NewAdComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule { }