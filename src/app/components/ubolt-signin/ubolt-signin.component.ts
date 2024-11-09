import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ubolt-signin',
  templateUrl: './ubolt-signin.component.html',
  styleUrls: ['./ubolt-signin.component.css']
})
export class UboltSigninComponent {
  visible:boolean=true;
  changetype:boolean=true;

  login: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.login = this.fb.group({
      email: [''],
      password: [''],
    })
  }
  onSubmit() {
   console.log(this.login.value);
  }
  passwordShow(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
   }

}
