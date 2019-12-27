import { AddProductsComponent } from '../add-products/add-products.component';
import { Component, OnInit, Injectable } from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import { NgModule } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Injectable()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  constructor(
   private Strorage: StorageService,
   private router: Router,
   private route: ActivatedRoute,
  ) {  }

  ngOnInit() {
    this.GetProducts();
    console.log('Running');

  }
  GetProducts(){
    this.Strorage.getProduct().then((res) => {
        console.log(res);
    });
  }
  OnCreate(){
    this.router.navigate(['customer/products']);
    this.router.navigate(['customer/addProducts']);
  }
  onClose(){

  }
}
