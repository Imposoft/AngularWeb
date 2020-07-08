import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Menu} from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Menu> {
    return this.http.get<Menu>('https://api.chucknorris.io/jokes/random');
  }
}
