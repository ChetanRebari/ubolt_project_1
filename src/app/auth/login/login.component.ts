import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {




  emailError: boolean = false;
  passwordError: boolean = false;
  visible:boolean=true;
  changetype:boolean=true;
  constructor(private router: Router, private NzNotification:NzNotificationService) { }
  onSubmit(formValue: any) {
    let storedData = localStorage.getItem('signup');
    if (storedData) {
      const users = JSON.parse(storedData);
      if (users.email == formValue.email && users.password == formValue.password) {
        this.router.navigate(['home']);
      } else if (formValue.password !== users.password && formValue.email !== users.email) {
        this.NzNotification.create(
          'warning',
         'warning',
         'Incorrect Email and Password'
       );
      } else if (formValue.email !== users.email) {
        this.emailError = true
      } else if (formValue.password !== users.password) {
        this.passwordError = true;
      }
    }else{
      this.NzNotification.create(
         'error',
        'error',
        'No user found. Please sign up first.'
      );
    }
  }
  passwordShow(){
   this.visible=!this.visible;
   this.changetype=!this.changetype;
  }
  userSignUp() {
    this.router.navigate(['signup'])
  }




  
}
