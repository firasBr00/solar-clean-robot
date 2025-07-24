import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component'; // <-- Ajoutez cette ligne
import { RegisterComponent } from './core/auth/register/register.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardHomeComponent } from './modules/dashboard/pages/dashboard-home/dashboard-home.component';
import { MissionComponent } from './modules/dashboard/components/mission/mission.component';
import { ListeMissionsComponent } from './modules/dashboard/components/liste-missions/liste-missions.component';
const routes: Routes = [
     { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-home', component: DashboardHomeComponent },
  { path: 'mission', component: MissionComponent},
  { path: 'liste-mission', component: ListeMissionsComponent},



  { 
    path: 'login',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) 
  },
     { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  // Ajoutez d'autres routes ici au besoin
  { path: '**', redirectTo: 'login' },
  {
  path: 'dashboard',
  loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
