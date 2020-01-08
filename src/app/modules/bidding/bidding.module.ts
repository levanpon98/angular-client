import { MenuService } from './../../services/menu.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiddingRoutingModule} from './bidding-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BiddingRoutingModule
  ],
  providers: [
    MenuService
  ],
  exports: [
  ]
})
export class BiddingModule { }
