import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
@Component({
  selector: 'app-biddingtopbar',
  templateUrl: './biddingtopbar.component.html',
  styleUrls: ['./biddingtopbar.component.css']
})
export class BiddingtopbarComponent implements OnInit {
  isLoggedIn = false;
  username = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedInStatus;
    this.username = localStorage.getItem('username');

  }
}
