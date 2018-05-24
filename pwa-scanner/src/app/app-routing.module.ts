import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/qr-scanner', pathMatch: 'full' },
  { path: 'barcode-scanner', component: BarcodeScannerComponent },
  { path: 'qr-scanner', component: QrScannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
