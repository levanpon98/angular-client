import { Component, OnInit } from '@angular/core';
import { MenuService} from '../../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Object = [];

  constructor(private menuService: MenuService,
              ) { }

  ngOnInit() {

    this.menuService.getMenu().subscribe(res => {
      this.menus = res;
    });
  }
}
