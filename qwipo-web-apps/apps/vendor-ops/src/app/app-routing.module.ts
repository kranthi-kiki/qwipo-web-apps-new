import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  // { path: '**', redirectTo: 'pages/home' }


];
const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
