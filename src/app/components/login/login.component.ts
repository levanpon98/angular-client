import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  errorMessage: String = '';
  LoginForm: FormGroup;
  returnURL: string;
  loading = false;
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
    ]
  };

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(8), Validators.required])
      )
    });

    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(value) {

    if (this.LoginForm.invalid) {
      return;
    }

    this.auth.login(value).subscribe(result => {
      console.log(result);
      if (result.ok) {
      //  @ts-ignore
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('token', result.token);
        localStorage.setItem('username', result.user.displayName);
        localStorage.setItem('userId', result.user.id);

        this.router.navigate(['top-bar']);
        this.router.navigate(['customer/info']);
      } else {
        this.alert = true;
        this.errorMessage = result.message;
      }
    });
  }
}
