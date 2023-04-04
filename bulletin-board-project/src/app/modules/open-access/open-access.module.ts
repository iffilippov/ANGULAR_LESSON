import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { AdvertismentCardComponentModule } from 'src/app/shared/components/advertisment-card/advertisment-card.component';



@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    AdvertismentCardComponentModule,
  ]
})
export class OpenAccessModule { }
