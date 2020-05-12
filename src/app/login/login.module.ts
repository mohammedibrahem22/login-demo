import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, WelcomeComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
