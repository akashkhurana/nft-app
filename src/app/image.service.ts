import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }
  API_URL = 'https://api.unsplash.com/search/photos?query=virtual-space&page=1&per_page=15&client_id=j83MMNZTVf9Xtn0ADgRrqvzuW3Cw45NDjk8DKPPBXUs'
  getImages() {
    return this.http.get<any>(this.API_URL);
  }
}
