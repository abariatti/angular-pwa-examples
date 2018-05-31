import { AuthGuard } from './../guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { BarcodeDecoderService } from '../services/barcode-decoder.service';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ProductService } from '../services/product.service';
import { BarcodeValidatorService } from '../services/barcode-validator.service';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { LoginComponent } from './login/login.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { AppMaterialModule } from '../modules/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    ZXingScannerModule.forRoot(),
    PagesRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    HomeComponent,
    ProductComponent,
    LoginComponent,
    ProfileComponent,
    QrScannerComponent
  ],
  providers: [
    ProductService,
    BarcodeValidatorService,
    BarcodeDecoderService,
    AuthGuard
  ]
})
export class PagesModule { }
