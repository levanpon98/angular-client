import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToCheckout(){
    this.router.navigate(['customer/checkout']);
  }
}
