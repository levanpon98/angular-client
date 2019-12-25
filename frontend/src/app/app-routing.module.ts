import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LogoutComponent} from './components/logout/logout.component';
import {FaqComponent} from './components/faq/faq.component';
import {TopBarComponent} from './modules/customer/top-bar/top-bar.component';

const routes: Routes = [
  {path: '',  pathMatch: 'full', component: HomepageComponent },
  {path: 'login', component: LoginComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'top-bar', component: TopBarComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
