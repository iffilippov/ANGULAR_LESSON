import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './interface/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AdvertismentComponent } from './pages/advertisment/advertisment.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertismentComponent,
    RecommendationsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
