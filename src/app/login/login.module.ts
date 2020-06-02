import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// import { 
//   MatToolbarModule, 
//   MatButtonModule,
//   MatSidenavModule,
//   MatIconModule,
//   MatListModule ,
//   MatStepperModule,
//   MatInputModule
// } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [LoginComponent, WelcomeComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
		// MatButtonModule,
		// RouterModule.forChild(routes),
		MatInputModule,
		MatFormFieldModule,
    MatPseudoCheckboxModule,
    
		TranslateModule.forRoot(),
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
