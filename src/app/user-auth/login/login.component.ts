import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  emailError: boolean = false;
  passwordError: boolean = false;
  constructor(private router: Router) { }

  onSubmit(formValue: any) {
    let storedData = localStorage.getItem('signup');
    if (storedData) {
      const users = JSON.parse(storedData);
      if (users.email == formValue.email && users.password == formValue.password) {
        this.router.navigate(['home']);
      } else if (formValue.password !== users.password && formValue.email !== users.email) {
        alert("Incorrect Email and Password")
      } else if (formValue.email !== users.email) {
        this.emailError = true
      } else if (formValue.password !== users.password) {
        this.passwordError = true;
      }
    }else{
      alert('No user found. Please sign up first.')
    }

  }

  userSignUp() {
    this.router.navigate(['signup'])
  }
}
