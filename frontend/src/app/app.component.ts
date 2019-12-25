import { Component } from '@angular/core';
import { MenuComponent} from './modules/customer/menu/menu.component';
import { FooterComponent} from './components/footer/footer.component';
import { SearchComponent} from './components/search/search.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
