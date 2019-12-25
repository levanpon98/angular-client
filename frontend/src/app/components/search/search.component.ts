import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  text = 'app';

  constructor() {
  }

  ngOnInit() {

  }

  updateValue(e) {
    this.text = e.target.value;
    console.log(this.text)
  }
}
