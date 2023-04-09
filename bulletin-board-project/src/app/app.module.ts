import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponentModule } from './shared/components/header/header.component';
import { CategoriesSearchComponentModule } from './shared/components/categories-search/categories-search.component';
import { CurrencyFormatPipeModule } from './shared/pipes/currency-format.pipe';
import { FileSizePipeModule } from './shared/pipes/file-size.pipe';
import { LoginModalComponentModule } from './shared/modals/login-modal/login-modal.component';
import { PhoneFormatPipeModule } from './shared/pipes/phone-format.pipe';
import { PhoneModalComponentModule } from './shared/modals/phone-modal/phone-modal.component';
import { OpenAccessModule } from './modules/open-access/open-access.module';

import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { ValidationComponent } from './shared/components/validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponentModule,
    CategoriesSearchComponentModule,
    CurrencyFormatPipeModule,
    FileSizePipeModule,
    LoginModalComponentModule,
    PhoneFormatPipeModule,
    PhoneModalComponentModule,
    OpenAccessModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
