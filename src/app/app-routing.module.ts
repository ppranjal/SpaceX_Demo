import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {path:'home',component:DashboardComponent}
  {path:'',loadChildren:()=>import('./generic/generic.module').then(m=>m.GenericModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
