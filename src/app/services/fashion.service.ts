import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  
  constructor(
    private http: HttpClient
  ) { }

  getListProduct(limit: number, offset: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  getDetail(url: string) {
    return this.http.get(url);
  }
}
