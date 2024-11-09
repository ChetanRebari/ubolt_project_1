import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripManagmentRoutingModule } from './trip-managment-routing.module';
import { TripComponent } from './trip/trip.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSpaceModule } from 'ng-zorro-antd/space';





@NgModule({
  declarations: [
    TripComponent,
  ],
  imports: [
    CommonModule,
    TripManagmentRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule ,
    NzDropDownModule,
    NzPaginationModule,
    NzSkeletonModule,
    NzSpinModule,
    NzSpaceModule
 
  ]
})
export class TripManagmentModule { }
