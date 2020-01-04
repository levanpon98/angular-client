
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './modules/customer/customer.module';
import { ToastrModule} from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FaqComponent } from './components/faq/faq.component';

import { AuthService} from './services/auth.service';
import { MenuService} from './services/menu.service';
import { CustomerService } from './services/customer.service';
import { AddressService } from './services/address.service';

// import { ConfirmPassDirective } from './share/confirm-pass.directive';

import { AuthInterceptor } from './auth.interceptor';
import { AddProductsComponent } from '../../src/app/modules/customer/add-products/add-products.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    FooterComponent,
    SearchComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    FaqComponent,
    // ConfirmPassDirective
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4000"]
      }
    })
  ],
  providers: [
    AuthService,
    MenuService,
    CustomerService,
    AddressService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddProductsComponent]
})
export class AppModule { }
