import { StorageService } from './../../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  alert = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private Strorage: StorageService,
    private route: ActivatedRoute,
  ) {
  }

  // tslint:disable-next-line:ban-types
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

    this.returnURL = this.route.snapshot.queryParams.returnUrl || '/';
  }
  AddProduct1(value) {
    console.log(value);
    this.Strorage.createProduct(value).then((result) => {
      console.log(result);
    });
  }
  onSubmit() {
  }
}
