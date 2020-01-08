import { SharedModule } from '../../shared/shared.module';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  username = '';
  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

}
