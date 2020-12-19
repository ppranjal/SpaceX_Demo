import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceLaunchComponent } from './space-launch/space-launch.component';

const routes: Routes = [
  {path:'',component:SpaceLaunchComponent},
  {path:':value',component:SpaceLaunchComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceLaunchRoutingModule { }