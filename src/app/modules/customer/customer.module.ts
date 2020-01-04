
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';

import {ChangePasswordComponent} from './change-password/change-password.component';
import {CustomerInfoComponent} from './customer-info/customer-info.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {CustomersComponent} from './customers/customers.component';
import {MenuComponent} from './menu/menu.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmPassDirective} from '../../share/confirm-pass.directive';
import { CustomerInfoPersonalComponent } from './customer-info-personal/customer-info-personal.component';
import { CustomerInfoAddressComponent } from './customer-info-address/customer-info-address.component';
import { CustomerInfoWalletComponent } from './customer-info-wallet/customer-info-wallet.component';

@NgModule({

  declarations: [
    ChangePasswordComponent,
    CustomerInfoComponent,
    TransactionsComponent,
    CustomersComponent,
    MenuComponent,
    TopBarComponent,
    ProductsComponent,
    OrdersComponent,
    ConfirmPassDirective,
    CustomerInfoPersonalComponent,
    CustomerInfoAddressComponent,
    CustomerInfoWalletComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuComponent,
    TopBarComponent,
    ConfirmPassDirective
  ]
})
export class CustomerModule {
}
