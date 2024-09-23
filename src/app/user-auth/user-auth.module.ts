import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthRoutingModule} from './user-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NumberonlyDirective } from './CustomDiractives/numberonly.directive';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

console.log('user-auth load module')
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    NumberonlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    AuthRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzNotificationModule
    
  ],
  exports:[
    LoginComponent,
    SignUpComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class UserAuthModule { }
