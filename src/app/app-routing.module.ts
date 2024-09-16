import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServicesComponent } from './components/services/services.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[authGuard]},
  { path: 'about', component: AboutComponent, canActivate: [authGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'services',component:ServicesComponent,canActivate:[authGuard]},
  { path: '', loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
