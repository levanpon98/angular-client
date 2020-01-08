import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn = false;
  username = '';

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedInStatus;
    this.username = localStorage.getItem('username');

  }

  goToCartPage(){
    this.router.navigate(['customer/carts']);
  }
}
