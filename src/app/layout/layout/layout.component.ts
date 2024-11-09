import { Component, } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  addNewClass: boolean = false
  navhidden(value: boolean) {
    console.log(value)
    if (value === true) {
      this.addNewClass = true;
    } else {
      this.addNewClass = false;
    }
  }
}
