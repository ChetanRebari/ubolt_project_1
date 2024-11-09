import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NumberonlyDirective } from '../CustomDiractives/numberonly.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { LoginUboltComponent } from './login-ubolt/login-ubolt.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    NumberonlyDirective,
    LoginUboltComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,  
    NzNotificationModule,
  ],
   exports: [
    LoginComponent,
    SignUpComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule { }
