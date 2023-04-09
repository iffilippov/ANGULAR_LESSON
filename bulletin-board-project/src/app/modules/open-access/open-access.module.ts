import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertismentCardComponentModule } from 'src/app/shared/components/advertisment-card/advertisment-card.component';

import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { AdvertismentComponent } from './pages/advertisment/advertisment.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';



@NgModule({
  declarations: [
    SearchResultsComponent,
    AdvertismentComponent,
    RecommendationsComponent,
  ],
  imports: [
    CommonModule,
    AdvertismentCardComponentModule,
  ],
})
export class OpenAccessModule { }
