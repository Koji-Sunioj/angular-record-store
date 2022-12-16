import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Album } from '../index/albums';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  bill: number;
  messages: string[];
  constructor(public _dataService: DataService) {
    this.messages = [];
    this.bill = _dataService.cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.Price * currentValue.Quantity,
      0
    );
  }
  updateCart(event: Event) {
    this.messages = [];
    event?.preventDefault();
    const nodes = (event.currentTarget as HTMLFormElement).elements;

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i] as HTMLInputElement;

      node.nodeName === 'INPUT' &&
        (() => {
          const id = Number(node.name.split('-')[1]);
          const value = Number(node.value);
          const cartItem = this._dataService.cart.find(
            (item) => item.AlbumId === id
          );
          const album = this._dataService.albums.find(
            (item) => item.AlbumId === id
          );
          const difference = value - cartItem?.Quantity!;

          const shouldnt =
            album!.Stock - difference < 0 || value < 0 || isNaN(value)
              ? 'shouldnt'
              : 'should';

          switch (shouldnt) {
            case 'shouldnt':
              node.value = String(cartItem?.Quantity);
              this.messages.push(cartItem?.Title!);
              break;
            case 'should':
              album!.Stock -= difference;
              cartItem!.Quantity += difference;
              if (value === 0) {
                this._dataService.cart = this._dataService.cart.filter(
                  (item) => item.AlbumId !== id
                );
              }
              break;
          }
        })();
    }
    this._dataService.items = this._dataService.cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.Quantity,
      0
    );
    this.bill = this._dataService.cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.Price * currentValue.Quantity,
      0
    );
  }
  clearCart(event: Event) {
    event?.preventDefault();
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
