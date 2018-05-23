import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './modules/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaStreamComponent } from './media-stream/media-stream.component';
import { BarcodeValidatorService } from '../services/barcode-validator.service';
import { BarcodeDecoderService } from '../services/barcode-decoder.service';

@NgModule({
  declarations: [
    AppComponent,
    MediaStreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [
    BarcodeValidatorService,
    BarcodeDecoderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
