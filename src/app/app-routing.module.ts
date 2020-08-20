import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashPageComponent } from './components/dash-page/dash-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },

{
  path:"board",
  component: DashPageComponent,
  
},
{
  path:"home",
  component: HomeComponent
},
{}
// {
//   path:"login",
//   component: L
// },
// {
//   path:"board",
//   component: DashPageComponent,
// },
// {
//   path:"board",
//   component: DashPageComponent,
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
