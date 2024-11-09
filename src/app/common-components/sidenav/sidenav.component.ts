import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  isCollapsed = true;
  isNavHidden: boolean = false;
  
 @Output() hidden=new EventEmitter<boolean>()
  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
    this.isNavHidden=!this.isNavHidden
    this.hidden.emit(this.isNavHidden)
  }
  
}


