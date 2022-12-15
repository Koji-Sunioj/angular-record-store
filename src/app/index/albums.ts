export interface Album {
  AlbumId: number;
  Title: string;
  ReleaseDate: string;
  Stock: number;
  Artist: string;
  Price: number;
}

export interface CartItem extends Omit<Album, 'Stock' | 'ReleaseDate'> {
  Quantity: number;
}

export const albums = [
  {
    AlbumId: 44,
    Title: "storm of the light's bane",
    ReleaseDate: '1996-10-06',
    Stock: 4,
    Artist: 'dissection',
    Price: 12.9,
  },
  {
    AlbumId: 45,
    Title: 'the somberlain',
    ReleaseDate: '1994-07-22',
    Stock: 6,
    Artist: 'dissection',
    Price: 10.2,
  },
  {
    AlbumId: 46,
    Title: 'darkside',
    ReleaseDate: '1995-01-15',
    Stock: 2,
    Artist: 'necrophobic',
    Price: 9.5,
  },
  {
    AlbumId: 51,
    Title: 'bloodhymns',
    ReleaseDate: '2003-03-21',
    Stock: 5,
    Artist: 'necrophobic',
    Price: 11.5,
  },
  {
    AlbumId: 47,
    Title: 'nightmare lord',
    ReleaseDate: '2021-02-28',
    Stock: 10,
    Artist: 'morgal',
    Price: 11.4,
  },
  {
    AlbumId: 48,
    Title: 'tales from the morgue',
    ReleaseDate: '2015-05-11',
    Stock: 7,
    Artist: 'entrails',
    Price: 8.4,
  },
  {
    AlbumId: 49,
    Title: 'heavy lies the crown',
    ReleaseDate: '2022-09-21',
    Stock: 0,
    Artist: 'wretched path',
    Price: 13.5,
  },
  {
    AlbumId: 50,
    Title: 'kuolunkylväjä',
    ReleaseDate: '2019-08-05',
    Stock: 4,
    Artist: 'sielunvihollinen',
    Price: 10.82,
  },
  {
    AlbumId: 115,
    Title: 'wisdom and hate',
    ReleaseDate: '2004-10-26',
    Stock: 2,
    Artist: 'baptism',
    Price: 12.2,
  },
];
