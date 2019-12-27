import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private id = localStorage.getItem('userId');
  private Uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(`${this.Uri}/api/user/` + this.id);
  }

  updateUserInfo(value): Observable<any> {
    return this.http.patch<any>(`${this.Uri}/api/user/` + this.id, value);
  }

  changePassword(value): Observable<any> {
    return this.http.patch<any>(`${this.Uri}/api/user/change-password/` + this.id, value);
  }
}
