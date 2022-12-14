import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { CartItem } from './albums';
import { albums, Album } from './albums';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  @Output() newItemEvent = new EventEmitter<number>();
  title = 'testapp';
  items = 0;
  constructor(public _dataService: DataService) {}
  onSave(AlbumId: number): void {
    const album = this._dataService.albums.find(
      (album) => album.AlbumId === AlbumId
    );
    album!.Stock--;

    const duplicate = this._dataService.cart.find(
      (album) => album.AlbumId == AlbumId
    );
    if (duplicate) {
      duplicate.Quantity++;
    } else {
      const cartItem: CartItem = {
        Artist: album?.Artist!,
        AlbumId: album?.AlbumId!,
        Quantity: 1,
        Title: album?.Title!,
        Price: album?.Price!,
      };
      this._dataService.cart.push(cartItem);
    }
    this.items++;
  }
}
