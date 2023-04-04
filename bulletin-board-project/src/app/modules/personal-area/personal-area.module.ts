import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NewAdComponent } from './pages/new-ad/new-ad.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AdvertismentCardComponentModule } from 'src/app/shared/components/advertisment-card/advertisment-card.component';



@NgModule({
  declarations: [
    MyAdsComponent,
    NewAdComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AdvertismentCardComponentModule,
  ]
})
export class PersonalAreaModule { }
