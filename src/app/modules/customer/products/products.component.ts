import { Component, OnInit, Injectable } from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import { NgModule } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
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
   private formBuilder: FormBuilder,
  ) { }
   errorMessage: String = '';
   AddProduct: FormGroup;
   returnURL: string;
   loading = false;
   validationMessages = {
     title: [
       {type: 'required', message: 'Email is required.'},
       {type: 'pattern', message: 'Please enter a valid email.'}
     ],
     price: [
       {type: 'required', message: 'Password is required.'},
       {
         type: 'minlength',
         message: 'Password must be at least 8 characters long.'
       }
     ],
     status: [
       {type: 'required', message: 'Password is required.'},
       {
         type: 'minlength',
         message: 'Password must be at least 8 characters long.'
       }
     ],
     description: [
       {type: 'required', message: 'Password is required.'},
       {
         type: 'minlength',
         message: 'Password must be at least 8 characters long.'
       }
     ]
   };
  ngOnInit() {
    this.GetProducts();
    console.log('Running');
    this.AddProduct = this.formBuilder.group({
      title: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      price: new FormControl(
        '',
        Validators.compose([Validators.minLength(8), Validators.required])
      ),
      description: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      status: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
    });
  }
  GetProducts() {
    this.Strorage.getProduct().then((res) => {
        console.log(res);
    });
  }
  OnCreate() {
    this.router.navigate(['customer/products']);
  }
  onClose() {
  }
  EditProduct(value) {
  }
  AddProduct1(value) {
    console.log(value);
    this.Strorage.createProduct(value).then((result) => {
      console.log(result);
    });
  }
}
