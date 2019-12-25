import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private id = localStorage.getItem('userId');
  private _uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getUserInfo() {
    return this.http.get(`${this._uri}/api/user/` + this.id);
  }

  updateUserInfo(value) {
    return this.http.patch(`${this._uri}/api/user/` + this.id, value);
  }

  changePassword(value) {
    return this.http.patch(`${this._uri}/api/user/change-password/` + this.id, value);
  }
}
