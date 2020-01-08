import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from '../shared/menu/menu.component';
import {TopBarComponent} from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    MenuComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    TopBarComponent
  ]
})
export class SharedModule { }
