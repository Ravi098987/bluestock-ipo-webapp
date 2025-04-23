import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'app/dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'app/ipo-form', loadComponent: () => import('./components/ipoform/ipoform.component').then(m => m.IpoFormComponent) },
  { path: 'app/ipo-form/:id', loadComponent: () => import('./components/ipoform/ipoform.component').then(m => m.IpoFormComponent) },
  { path: 'app/ipo-list', loadComponent: () => import('./components/ipolist/ipolist.component').then(m => m.IpoListComponent) },
  { path: '**', redirectTo: '' }
];
