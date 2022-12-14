import { Injectable } from '@angular/core';
import { CartItem, Album, albums } from './index/albums';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}
  // cart: Album[] = [];
  cart: CartItem[] = [];
  albums: Album[] = albums;
}
