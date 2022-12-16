import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Album } from './albums';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  title = 'testapp';
  filtered: Album[];
  sortBy: { header: string; direction: string } = {
    header: 'Artist',
    direction: 'ascending',
  };
  tableHeaders: string[];
  constructor(public _dataService: DataService) {
    this.sortBy = {
      header: 'Artist',
      direction: 'ascending',
    };
    this.tableHeaders = ['Artist', 'Title', 'Released', 'Stock', 'Price'];
  }
  ngOnInit(): void {
    this.filtered = this._dataService.albums;
    this.compareFn(this.sortBy.header);
  }
  compareFn(header: string) {
    const key = header === 'Released' ? 'ReleaseDate' : (header as keyof Album);
    if (this.sortBy.direction === 'ascending') {
      this.filtered.sort(function (a, b) {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    } else {
      this.filtered.sort(function (a, b) {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      });
    }
  }

  changeSort(header: string) {
    if (header === this.sortBy.header) {
      this.sortBy.direction =
        this.sortBy.direction === 'descending' ? 'ascending' : 'descending';
    } else {
      this.sortBy.header = header;
    }
    this.compareFn(header);
  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filtered = this._dataService.albums.filter(
      (item) =>
        item.Artist.includes(filterValue) || item.Title.includes(filterValue)
    );
    this.compareFn(this.sortBy.header);
  }
}
