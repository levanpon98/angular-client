import { StorageService } from './../../../services/storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-biddingtheme',
  templateUrl: './biddingtheme.component.html',
  styleUrls: ['./biddingtheme.component.css']
})
export class BiddingthemeComponent implements OnInit {
  items: Array<any> = [];
  item: Array<any> = [];
  constructor(private router: Router,
              private storage: StorageService

    ) { }

  ngOnInit() {
    console.log("runningsss");
    this.GetProduct();
  }
  GetProduct(){
    console.log("get is running");
    this.storage.getProduct().then((result) =>{
      this.items = result['products'];
    });
  }
}
