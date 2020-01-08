import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuService} from '../../../services/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: object = [];

  constructor(private menuService: MenuService,
              private router: Router
              ) { }

  ngOnInit() {

    this.menuService.getMenu().subscribe(res => {
      this.menus = res;
    });
  }
  goToProductPage(){
    this.router.navigate(['bidding/biddingtheme']);
  }
}
