import { BiddingdetailsComponent } from './biddingdetails/biddingdetails.component';
import { BiddingthemeComponent } from './biddingtheme/biddingtheme.component';
import { AuthGuard } from './../../guard/auth.guard';
import { BiddingComponent } from './../bidding/bidding/bidding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bidding',
    component: BiddingComponent,
    children: [
      {
        path: 'biddingtheme',
        component: BiddingthemeComponent
      },
      {
        path: 'biddingdetails',
        component: BiddingdetailsComponent
      },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiddingRoutingModule { }
