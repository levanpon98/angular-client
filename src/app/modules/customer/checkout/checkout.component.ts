import { AddressService } from './../../../services/address.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  billingAddresses: FormGroup;
  provinces = [];
  districts = [];
  wards = [];
  addresses = [];
  returnURL: string;
  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private addressService: AddressService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initFormAddAddress();
    this.addressService.getProvinces().subscribe(data => {
      this.provinces = data;
    });
  }
  initFormAddAddress() {
    this.billingAddresses = this.formBuilder.group({
      lastname: new FormControl(
        '',
         Validators.compose([
           Validators.required
         ])
       ),
      firstname: new FormControl(
        '',
         Validators.compose([
           Validators.required
         ])
       ),
      address: new FormControl(
       '',
        Validators.compose([
          Validators.required
        ])
      ),
      province: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      district: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      ward: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      country: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      phone: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      note: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
    });
    this.returnURL = this.route.snapshot.queryParams.returnUrl || '/';
    this.getAddresses();
  }

  onChangeProvince(code) {
    this.addressService.getDistrict(code.target.options[code.target.options.selectedIndex].value).subscribe(data => {
        this.districts = data;
        console.log(data);
        this.wards = [];
      });
  }

  onChangeDistrict(code) {
    this.addressService.getWard(code.target.options[code.target.options.selectedIndex].value).subscribe(data => {
        this.wards = data;
      });
  }

  getAddresses() {
    this.addressService.getAddresses().subscribe(data => {
      console.log(data);
      this.addresses = data;
    });
  }
  GoToNext(value) {
    if (this.billingAddresses.invalid) {
      return;
    }
  }
}
