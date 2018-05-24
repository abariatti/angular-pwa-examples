import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './modules/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeValidatorService } from '../services/barcode-validator.service';
import { BarcodeDecoderService } from '../services/barcode-decoder.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AppComponent,
    QrScannerComponent,
    BarcodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ZXingScannerModule.forRoot()
  ],
  providers: [
    BarcodeValidatorService,
    BarcodeDecoderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
