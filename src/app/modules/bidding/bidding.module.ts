import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiddingthemeComponent } from './biddingtheme/biddingtheme.component';
import {BiddingRoutingModule} from './bidding-routing.module';
import { BiddingtopbarComponent } from './biddingtopbar/biddingtopbar.component';
import { BiddingmenuComponent } from './biddingmenu/biddingmenu.component';

@NgModule({
  declarations: [
    BiddingthemeComponent,
    BiddingtopbarComponent,
    BiddingmenuComponent,
  ],
  imports: [
    CommonModule,
    BiddingRoutingModule
  ],
  exports: [
    BiddingmenuComponent,
    BiddingtopbarComponent,
  ]
})
export class BiddingModule { }
