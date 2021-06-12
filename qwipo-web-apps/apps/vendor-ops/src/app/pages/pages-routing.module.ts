import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from '../constants/app-routes';

const routes: Routes = [
  {
    path: APP_ROUTES.HOME, loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
