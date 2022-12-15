import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, CheckoutComponent, AlbumPageComponent, ArtistPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
