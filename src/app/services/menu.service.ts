import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getMenu(): Observable<any> {
    return this.http.get<any>(`${this.uri}/api/menu`);
  }

}
