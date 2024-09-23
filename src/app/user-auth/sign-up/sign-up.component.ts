import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm: FormGroup;
  errorColor: string = "red";
  colorRed: boolean = true;
  isPasswordMatch: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$')]],
      confirmpassword: ['', [Validators.required]],
    })
  }


  onSubmit() {
    let json = JSON.stringify(this.signUpForm.value)
    localStorage.setItem("signup", json);
    this.router.navigate(['login'])
  }
  confirmpassword(event: any) {
   let confirmpassword=event.target.value;
    let password = this.signUpForm.get('password')?.value;
    console.log(confirmpassword);
    console.log(password)
    if (confirmpassword === password) {
      this.isPasswordMatch = true;
    } else {
      this.isPasswordMatch = false;
    }
  }


}
