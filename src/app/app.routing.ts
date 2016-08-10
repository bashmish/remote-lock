import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DoorsComponent } from './doors/doors.component';

const appRoutes : Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'doors',
    component: DoorsComponent,
  },
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
