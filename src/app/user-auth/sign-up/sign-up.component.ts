import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isLoading: boolean = false;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.signUpForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required], Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(5),Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$')]],
    });
    // email pattern=>'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    //  password pattern =>,'^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')
  
  }

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      // console.log(this.signUpForm)
      this.isLoading = false;
      let json = JSON.stringify(this.signUpForm.value)
      localStorage.setItem("signup", json);
      this.router.navigate(['login'])
    }, 3000);
  }

}
