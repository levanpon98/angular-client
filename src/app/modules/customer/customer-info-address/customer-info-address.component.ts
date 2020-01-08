import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import {ToastrService} from 'ngx-toastr';
import { AddressService} from '../../../services/address.service';

@Component({
  selector: 'app-customer-info-address',
  templateUrl: './customer-info-address.component.html',
  styleUrls: ['./customer-info-address.component.css']
})
export class CustomerInfoAddressComponent implements OnInit {
  addAddressFrom: FormGroup;
  add = false;
  provinces = [];
  districts = [];
  wards = [];
  addresses = [];
  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private addressService: AddressService
  ) { }

  ngOnInit() {
    this.getAddresses();
    this.addressService.getProvinces().subscribe(data => {
      this.provinces = data;
    });
    this.initFormAddAddress();
  }

  get form() { return this.addAddressFrom.controls; }

  initFormAddAddress() {
    this.addAddressFrom = this.formBuilder.group({
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
    });
  }

  addNewEvent() {
    this.add = !this.add;
  }

  onChangeProvince(code) {
    if (code) {
      this.addressService.getDistrict(code).subscribe(data => {
        this.districts = data;
        this.wards = [];
      });
    }
  }

  onChangeDistrict(code) {
    if (code) {
      this.addressService.getWard(code).subscribe(data => {
        this.wards = data;
      });
    }
  }

  getAddresses() {
    this.addressService.getAddresses().subscribe(data => {
      this.addresses = data;
    });
  }
  onSubmit(value) {
    if (this.addAddressFrom.invalid) {
      return;
    }
    let result = this.wards.filter(obj => {
      return obj.code === value.ward;
    });
    value['path'] = result[0].path_with_type;

    this.addressService.addAddress(value).subscribe(result => {
      if (result.ok === 1) {
        this.toast.success(result.messages, 'Success');
        this.addresses.push(result.address);
      } else if (result.ok === 0){
        this.toast.error(result.error, 'Error');
      }
    });
  }

  editAddress(value) {

  }

  deleteAddress(value) {

  }
}
