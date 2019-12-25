import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-info-personal',
  templateUrl: './customer-info-personal.component.html',
  styleUrls: ['./customer-info-personal.component.css']
})
export class CustomerInfoPersonalComponent implements OnInit {

  personalFrom: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private user: CustomerService,
    private toast: ToastrService
  ) {
  }

  ngOnInit() {
    this.user.getUserInfo().subscribe(result => {
      this.initPersonalForm(result.user);
    });
  }

  initPersonalForm(result) {
    this.personalFrom = this.formBuilder.group({
      email: new FormControl(
        result.email,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      username: new FormControl(
        result.displayName,
        Validators.compose([Validators.minLength(8), Validators.required])
      ),
      first_name: new FormControl(result.first_name),
      last_name: new FormControl(result.last_name),
      phone: new FormControl(
        result.phone,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
        ])
      ),
    });
  }

  get personal() {
    return this.personalFrom.controls;
  }

  onSubmit(value) {
    if (this.personalFrom.invalid) {
      return;
    }

    this.user.updateUserInfo(value).subscribe(result => {
      if(result.ok == 1) {
        this.toast.success(result.messages, 'Success')
      } else if(result.ok == 0){
        this.toast.error(result.error, 'Error')
      } else if (result.ok == -1) {
        this.toast.warning(result.error, 'Warning')
      }
    })
  }

}
