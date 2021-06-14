import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LayoutComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
