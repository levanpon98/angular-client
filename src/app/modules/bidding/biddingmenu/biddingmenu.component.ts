import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biddingmenu',
  templateUrl: './biddingmenu.component.html',
  styleUrls: ['./biddingmenu.component.css']
})
export class BiddingmenuComponent implements OnInit {

  menus: Object = [];

  constructor(
              ) { }

  ngOnInit() {

    // this.menuService.getMenu().subscribe(res => {
    //   this.menus = res;
    // });
  }
}
