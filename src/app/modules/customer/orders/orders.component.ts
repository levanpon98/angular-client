import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {StorageService} from '../../../services/storage.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private Strorage: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.GetOrder();
  }
  GetOrder(){
    this.Strorage.GetOrder().then((result) => {
      console.log(result);
    });
  }
}
