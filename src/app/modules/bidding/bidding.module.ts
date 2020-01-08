import { SharedModule } from '../shared/shared.module';
import { MenuService } from './../../services/menu.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiddingRoutingModule} from './bidding-routing.module';
import { BiddingthemeComponent } from './biddingtheme/biddingtheme.component';
import { BiddingComponent } from './bidding/bidding.component';
import { BiddingdetailsComponent } from './biddingdetails/biddingdetails.component';


@NgModule({
  declarations: [
  BiddingthemeComponent,
  BiddingComponent,
  BiddingdetailsComponent],
  imports: [
    CommonModule,
    BiddingRoutingModule,
    SharedModule
  ],
  providers: [
    MenuService
  ],
  exports: [
  ]
})
export class BiddingModule { }
