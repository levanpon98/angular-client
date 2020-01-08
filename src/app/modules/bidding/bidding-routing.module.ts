import { AuthGuard } from './../../guard/auth.guard';
import { BiddingComponent } from './../customer/bidding/bidding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customer',
    component: BiddingComponent,
    children: [
      // {
      //   path: 'change-password',
      //   component: ChangePasswordComponent
      // },
      // {
      //   path: 'checkout',
      //   component: CheckoutComponent
      // },
      // {
      //   path: 'info',
      //   component: CustomerInfoComponent
      // },
      // {
      //   path: 'products',
      //   component: ProductsComponent
      // },
      // {
      //   path: 'orders',
      //   component: OrdersComponent
      // },
      // {
      //   path: 'bidding',
      //   component: BiddingComponent
      // },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiddingRoutingModule { }
