import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PendingUserComponent } from './auth/pending-user/pending-user.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'email-activation', component: PendingUserComponent},
    { path: 'email-activation/:token', component: PendingUserComponent},
];
