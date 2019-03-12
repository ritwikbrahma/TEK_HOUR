import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { AuthGuard } from '../auth.guard';
import { TableComponent } from '../table/table.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PresentersComponent } from '../presenters/presenters.component';

export const navRoutes: Routes = [
  { path: '', component: NavigationComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], 
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'presenters', component: PresentersComponent },
    { path: 'table', component: TableComponent },
  ],
  },
  ];


