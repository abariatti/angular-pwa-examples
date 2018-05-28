import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
