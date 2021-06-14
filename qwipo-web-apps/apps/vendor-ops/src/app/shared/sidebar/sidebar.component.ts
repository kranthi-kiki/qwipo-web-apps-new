/* eslint-disable @angular-eslint/component-selector */
import { APP_ROUTES } from './../../constants/app-routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  app_Routes = APP_ROUTES;
  public isOpenUiElements = false;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

}
