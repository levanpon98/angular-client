import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private id = localStorage.getItem('userId');
  private _uri = 'http://localhost:4000';
  constructor(private http: HttpClient) {
  }
  getProduct() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this._uri}/api/product`).toPromise().then((result) => {
       resolve(result);
     }).catch((err) => {
       reject(err);
     });
    });
  }
  createProduct(value) {
    return new Promise((resolve, reject) => {
      console.log(value);
      this.http.post(`${this._uri}/api/product`,
       {
        'title': value.title,
        'price': value.price,
        'description': value.description,
        'status': 1

      }
      ).toPromise().then((result) => {
       resolve(result);
     }).catch((err) => {
       reject(err);
     });
    });
  }
}
