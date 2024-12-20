import { Routes } from '@angular/router';
import { ForgotComponent } from '@features/forgot/forgot.component';
import { LoginComponent } from '@features/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot',
    component: ForgotComponent,
  },
];
