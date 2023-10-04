import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Movie {
    id?: number;
    genreId?:number;
    name: string = '';
    status?:number;
    price?:number;
    releaseDate?: Date;
    slots: string = '';
    language: string = '';
    image?:Blob

  }