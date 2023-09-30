import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    LayoutAuthComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

  ]
})
export class AuthModule { }
