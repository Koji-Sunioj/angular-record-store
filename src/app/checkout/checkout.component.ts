import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Album } from '../index/albums';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(public _dataService: DataService) {}
  updateCart() {
    console.log(this._dataService.cart);
  }
  clearCart() {
    this._dataService.cart.forEach((cartItem) => {
      const found: Album = this._dataService.albums.find(
        (album) => album.AlbumId === cartItem.AlbumId
      )!;
      found.Stock += cartItem.Quantity;
    });
    this._dataService.cart = new Array();
    this._dataService.items = 0;
  }
}
