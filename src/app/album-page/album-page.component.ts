import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../index/albums';
import { DataService } from '../data.service';
import { CartItem } from '../index/albums';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css'],
})
export class AlbumPageComponent implements OnInit {
  AlbumId: number;
  album: Album;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    public _dataService: DataService
  ) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.AlbumId = +params['AlbumId'];
    });
    this.album = this._dataService.albums.find(
      (item) => item.AlbumId === this.AlbumId
    )!;
  }

  onSave(AlbumId: number): void {
    this.album!.Stock--;
    const duplicate = this._dataService.cart.find(
      (album) => album.AlbumId == AlbumId
    );
    if (duplicate) {
      duplicate.Quantity++;
    } else {
      const cartItem: CartItem = {
        Artist: this.album?.Artist!,
        AlbumId: this.album?.AlbumId!,
        Quantity: 1,
        Title: this.album?.Title!,
        Price: this.album?.Price!,
      };
      this._dataService.cart.push(cartItem);
    }
    this._dataService.items++;
  }
}
