import { Component, OnInit, Injectable } from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import { NgModule } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { resolve } from 'url';
import { ThrowStmt } from '@angular/compiler';
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
   // tslint:disable-next-line:ban-types
   errorMessage: String = '';
   formAddProduct: FormGroup;
   formEditProduct: FormGroup;
   returnURL: string;
   loading = false;
   defaultstatus = 3;
   items: Array<any> = [];
   item: Array<any> = [];
  //  EditItems: Array<any> = [];
   EditItem: any;
   idEditItem: any;
   Edittitle: any;
   statusDelete: boolean;
   DeleteItems: any;
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
    this.statusDelete = false;
    console.log('Running');
    this.formAddProduct = this.formBuilder.group({
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
    this.formEditProduct = this.formBuilder.group({
      titleEdit: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      priceEdit: new FormControl(
        '',
        Validators.compose([Validators.minLength(8), Validators.required])
      ),
      descriptionEdit: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      statusEdit: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
    });
  }
  GetProducts() {
    this.Strorage.getProduct().then((res)  => {
      this.items = res.products;
      for (let i = 0 ; i < res.count; i++) {
        this.item[i] = this.items[i];
      }
    });
  }
  OnCreate() {
    this.router.navigate(['customer/products']);
  }
  onClose() {
  }
  EditProduct(value) {
    this.Strorage.EditProduct(value, this.idEditItem).then((result) => {
      this.GetProducts();
     // window.location.reload();
  });
  }
  AddProduct(value) {
    console.log(value);
    this.Strorage.createProduct(value).then((result) => {
      console.log(result);
      this.GetProducts();
    });
  }
  editGetSpecific(value) {
    return new Promise((res, reject) => {
    this.Strorage.GetSpecificProduct(value).then((result) => {
      // this.EditItem = '';
      this.EditItem = result;
      this.idEditItem = result.product._id;

      this.formEditProduct.controls.titleEdit.setValue(result.product.title);
      this.formEditProduct.controls.priceEdit.setValue(result.product.price);
      this.formEditProduct.controls.descriptionEdit.setValue(result.product.description);
      });
  });
  }
  deleteGetSpecific(value){
    this.DeleteItems = value;
    this.statusDelete = true;
  }
  DeleteProduct(){
    console.log(this.DeleteItems);
    this.Strorage.DeleteProduct(this.DeleteItems).then((result) => {
      console.log(result);
      this.GetProducts();
    });
  }
}
