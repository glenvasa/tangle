import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _jsonURL = 'assets/data/products.json';
  constructor(private Http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.Http.get(this._jsonURL);
  }
}
