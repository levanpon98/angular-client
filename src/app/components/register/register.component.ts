import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }
  successMessage: String = ''
  errorMessage: String = '';
  RegisterFrom: FormGroup;
  returnURL: string;
  loading = false;
  error = false;
  success = false;
  status = false;
  check = false;

  validation_messages = {
    email: [
      {type: 'required', message: 'Email is required.'},
      {type: 'pattern', message: 'Please enter a valid email.'}
    ],
    password: [
      {type: 'required', message: 'Password is required.'},
      {
        type: 'minlength',
        message: 'Password must be at least 8 characters long.'
      }
    ],
    confirm_password: [
      {type: 'required', message: 'Confirm password is required.'},
      {
        type: 'minlength',
        message: 'Password must be at least 8 characters long.'
      }
    ],
    username: [
      {type: 'required', message: 'Username is required.'},
      {
        type: 'minlength',
        message: 'Password must be at least 8 characters long.'
      }
    ]
  };

  get form() { return this.RegisterFrom.controls; }
  changeCheck() {
    this.check = true;
  }
  changeStatus() {
    this.status = !this.status;
  }

  ngOnInit() {
    this.status = false;
    this.RegisterFrom = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.minLength(8),
          Validators.required
        ])
      ),
      confirm_password: new FormControl(
        '',
        Validators.compose([Validators.minLength(8), Validators.required])
      ),
      username: new FormControl(
        '',
        Validators.compose([Validators.minLength(8), Validators.required])
      )
    });

    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  register(value) {
    if(this.RegisterFrom.invalid || this.status === false) {
      return;
    }
    this.auth.register(value).subscribe(result => {
      if (result.ok) {
        this.success = true;
        this.error = false;
        this.successMessage = result.message;

        setInterval(() => {
          this.router.navigate(['login'])
        }, 2000)
      } else {
        this.error = true;
        this.success = false;
        this.errorMessage = result.message;
      }
    });
  }
}
