import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config/config.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Menu} from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularWeb';

  public frase: Menu;

  constructor(
    protected configService: ConfigService
  ) {
  }

  ngOnInit(): void {
    this.configService.getUsers().subscribe(frase => (this.frase = frase));
  }
}
