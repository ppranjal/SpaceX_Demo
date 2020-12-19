import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceLandingComponent } from './space-landing/space-landing.component';

const routes: Routes = [
  {path:'',component:SpaceLandingComponent},
  {path:':value',component:SpaceLandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceLandingRoutingModule { }