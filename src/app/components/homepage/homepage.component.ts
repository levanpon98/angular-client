import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  // tslint:disable:only-arrow-functions
  ngOnInit() {
    console.log(localStorage.getItem('isLoggedIn'));
    if (localStorage.getItem('isLoggedIn')) {
      window.addEventListener('popstate', function(event) {
      window.history.back();
      }, false);
    }
  }

}
