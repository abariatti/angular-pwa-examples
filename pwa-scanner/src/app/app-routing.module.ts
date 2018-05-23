import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaStreamComponent } from './media-stream/media-stream.component';

const routes: Routes = [
  { path: '', redirectTo: '/media-stream', pathMatch: 'full' },
  { path: 'media-stream', component: MediaStreamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
