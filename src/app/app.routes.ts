import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige el root '/' a '/login'
    { path: 'login', component: LoginComponent },
    // ...
  ];
  