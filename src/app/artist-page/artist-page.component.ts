import { Component, OnInit } from '@angular/core';
import { Album } from '../index/albums';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css'],
})
export class ArtistPageComponent implements OnInit {
  Artist: string;
  albums: Album[];
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    public _dataService: DataService
  ) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.Artist =
        String(params['Artist']).charAt(0).toUpperCase() +
        String(params['Artist']).slice(1);
    });
    this.albums = this._dataService.albums.filter(
      (item) => item.Artist === this.Artist.toLowerCase()
    );
  }
}
