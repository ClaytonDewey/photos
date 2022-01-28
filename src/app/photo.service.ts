import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhoto() {
      return this.http.get('https://api.unsplash.com/photos/random', {
        headers: {
            Authorization: 'Client-ID xgLA2dA680bnWF-JRGgk01Tlwrwgh1rfHpG6xL41iCc'
        } 
      });
  }
}
