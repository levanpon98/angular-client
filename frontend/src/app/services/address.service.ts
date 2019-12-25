import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private _uri = 'http://localhost:4000';
  private userId = localStorage.getItem('userId')
  constructor(private http: HttpClient) {
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getProvinces(): Observable<any> {
    return this.http.get<any>(`${this._uri}/api/province`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getDistrict(code): Observable<any> {
    return this.http.get<any>(`${this._uri}/api/district/`+ code).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getWard(code): Observable<any> {
    return this.http.get<any>(`${this._uri}/api/ward/`+ code).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addAddress(value) {
    return this.http.post(`${this._uri}/api/address/` + this.userId, value)
  }

  getAddresses() {
    return this.http.get<any>(`${this._uri}/api/address/` + this.userId).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}
