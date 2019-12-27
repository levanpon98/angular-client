import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { AuthService } from './services/auth.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ` + token,
          'Content-Type': 'application/json'
        }
      });

      return next.handle(cloned).pipe(
        catchError(
          (err, caught) => {
            if(err.status === 401) {
              this.handleAuthError();
              return of(err);
            }
            throw err;
          }
        )
      );
    } else {
      return next.handle(req);
    }
  }

  private handleAuthError(){
    this.auth.removeSession();
    this.router.navigate(['login']);
  }
}
