import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from '../constants/app-routes';

const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.LOGIN, pathMatch: "full" },
  { path: APP_ROUTES.LOGIN, component: LoginComponent },
  { path: APP_ROUTES.REGISTER, component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
