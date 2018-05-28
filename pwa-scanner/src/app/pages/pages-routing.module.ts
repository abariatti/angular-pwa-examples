import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'qr-scanner', component: QrScannerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
