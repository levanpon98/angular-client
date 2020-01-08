import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private id = localStorage.getItem('userId');
  private uri = 'http://localhost:4000';
  constructor(private http: HttpClient) {
  }
  getCheckout(): Promise<any> {
    return new Promise((resolve, reject) => {
    });
  }
}
