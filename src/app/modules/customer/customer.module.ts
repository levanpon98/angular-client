import { SharedModule } from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {CustomerInfoComponent} from './customer-info/customer-info.component';
import {CustomersComponent} from './customers/customers.component';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmPassDirective} from '../../share/confirm-pass.directive';
import { CustomerInfoPersonalComponent } from './customer-info-personal/customer-info-personal.component';
import { CustomerInfoAddressComponent } from './customer-info-address/customer-info-address.component';
import { CustomerInfoWalletComponent } from './customer-info-wallet/customer-info-wallet.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartsComponent } from './carts/carts.component';
import { BiddingComponent } from './bidding/bidding.component';

@NgModule({

  declarations: [
    ChangePasswordComponent,
    CustomerInfoComponent,
    CustomersComponent,
    ProductsComponent,
    OrdersComponent,
    ConfirmPassDirective,
    CustomerInfoPersonalComponent,
    CustomerInfoAddressComponent,
    CustomerInfoWalletComponent,
    CheckoutComponent,
    CartsComponent,
    BiddingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ConfirmPassDirective
  ]
})
export class CustomerModule {
}
