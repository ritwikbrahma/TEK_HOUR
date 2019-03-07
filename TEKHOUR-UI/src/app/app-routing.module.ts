import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './auth.guard';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: NavigationComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
    { path: '', component: NavigationComponent },
  ]},
  { path: '**', pathMatch: 'full', redirectTo: 'error/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
