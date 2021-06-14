import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [CommonModule,
    MatToolbarModule],
  exports: [MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule
  ],

  schemas: [NO_ERRORS_SCHEMA],
})
export class MaterialModule {}
