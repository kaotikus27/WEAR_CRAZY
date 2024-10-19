import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'AboutUs',
    component:AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
