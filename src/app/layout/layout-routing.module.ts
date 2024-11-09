import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { authGuard } from '../auth/guard/auth.guard';
import { LoginComponent } from '../auth/login/login.component';
import { AboutComponent } from '../components/about/about.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ServicesComponent } from '../components/services/services.component';
import { UboltSigninComponent } from '../components/ubolt-signin/ubolt-signin.component';
import { TripManagmentModule } from '../trip-managment/trip-managment.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [authGuard] },
  {path:'ubolt',component:UboltSigninComponent},  
  { path: '', loadChildren: () => import('../trip-managment/trip-managment.module').then(m =>m.TripManagmentModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
