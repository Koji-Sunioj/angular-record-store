import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'album/:AlbumId', component: AlbumPageComponent },
  { path: 'artist/:Artist', component: ArtistPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
