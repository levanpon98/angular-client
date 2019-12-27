import { AddProductsComponent } from './add-products/add-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerInfoComponent} from './customer-info/customer-info.component';
import { TransactionsComponent} from './transactions/transactions.component';
import {CustomersComponent} from './customers/customers.component';

import {AuthGuard} from '../../guard/auth.guard';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomersComponent,
    children: [
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'info',
        component: CustomerInfoComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'addProducts',
        component: AddProductsComponent
      },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
