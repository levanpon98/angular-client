import { StorageService } from './../../../services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-biddingdetails',
  templateUrl: './biddingdetails.component.html',
  styleUrls: ['./biddingdetails.component.css']
})
export class BiddingdetailsComponent implements OnInit {
  state: any;
  items: any;
  status: boolean;
  constructor(private router: Router,
              private active: ActivatedRoute,
              private storage: StorageService) { }

  ngOnInit() {
   this.status = false;
   this.active.queryParams.subscribe(param => {
      this.state = param;
      this.storage.getProductDetails(param.id).then((result) => {
        this.items = result.product;
        this.status = true;
        console.log(this.items);
    });
   });
  }
  GetProductDetail(value){

  }
  gotoCart() {
    this.router.navigate(['customer/carts']);
  }
}
