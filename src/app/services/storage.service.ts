import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private id = localStorage.getItem('userId');
  private uri = 'http://localhost:4000';
  constructor(private http: HttpClient) {
  }
  getProduct(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.uri}/api/product`).toPromise().then((result) => {
       resolve(result);
     }).catch((err) => {
       reject(err);
     });
    });
  }
  createProduct(value, image1, image2, image3, mainimage): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(mainimage);
      this.http.post(`${this.uri}/api/product`,
       {
        // tslint:disable:object-literal-key-quotes
        'title': value.title,
        'price': value.price,
        'description': value.description,
        'status': 1,
        'image': mainimage,
        'gallery': image1

      }
      ).toPromise().then((result) => {
       resolve(result);
     }).catch((err) => {
       reject(err);
     });
    });
  }
  EditProduct(value, proid): Promise<any> {
    return new Promise((resolve, reject) => {
    this.http.patch<any>(`${this.uri}/api/product/` + proid,
    {
      'title': value.titleEdit,
      'price': value.priceEdit,
      'description': value.descriptionEdit,
      'status': value.statusEdit
    }).toPromise().then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err);
    });
  });
 }
 GetOrder(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.get(`${this.uri}/api/order`).toPromise().then((result) => {
     resolve(result);
   }).catch((err) => {
     reject(err);
   });
  });
 }
 GetSpecificProduct(value): Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.get(`${this.uri}/api/product/` + value).toPromise().then((result) => {
     resolve(result);
   }).catch((err) => {
     reject(err);
   });
  });
 }
 DeleteProduct(id): Promise<any> {
  return new Promise((resolve, reject) => {
    this.http.delete(`${this.uri}/api/product/` + id).toPromise().then((result) => {
      console.log('Done');
      resolve(result);
   }).catch((err) => {
     reject(err);
   });
  });
 }
}
