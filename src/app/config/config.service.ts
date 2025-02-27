import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Menu} from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private baseURL = 'https://cors-anywhere.herokuapp.com/http://imposoft.es:8080/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Menu> {
    return this.http.get<Menu>(this.baseURL + 'loadMenu', { params: new HttpParams().set('id', String(1)), });
  }
}
