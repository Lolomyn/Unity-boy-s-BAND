import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationsComponent} from './registrations/registrations.component';
import {AuthComponent} from './auth.component';
import {ThemesModel} from '../system/shared/models/themes.model';

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
  {path: 'login', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
