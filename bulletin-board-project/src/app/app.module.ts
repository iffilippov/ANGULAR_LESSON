import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
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
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
