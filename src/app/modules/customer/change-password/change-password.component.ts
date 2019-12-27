import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private user: CustomerService,
    private toast: ToastrService
  ) {
  }

  ngOnInit() {
    this.initFormChangePassword();
  }

  initFormChangePassword() {
    this.changePasswordForm = this.formBuilder.group({
      current_password: new FormControl('',
        Validators.compose([
          Validators.required,
        ])
      ),

      new_password: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ),
      confirm_password: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ),
    });
  }

  get form() {
    return this.changePasswordForm.controls;
  }

  onSubmit(value) {
    if (this.changePasswordForm.invalid) {
      return;
    }
    // this.user.changePassword(value).subscribe(result => {
    //   if (result.ok == 1) {
    //     this.toast.success(result.messages, 'Success');
    //   } else if (result.ok == 0) {
    //     this.toast.error(result.error, 'Error');
    //   } else if (result.ok == -1) {
    //     this.toast.warning(result.error, 'Warning');
    //   }
    // });
  }
}
