import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from '../common-components/footer/footer.component';
import { HeaderComponent } from '../common-components/header/header.component';
import { SidenavComponent } from '../common-components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { TripManagmentModule } from '../trip-managment/trip-managment.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    NzSwitchModule,
    NzMenuModule,
    NzButtonModule, 
    NzIconModule,
    NzToolTipModule,
    TripManagmentModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
