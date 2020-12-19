import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceDetailComponent } from './space-detail/space-detail.component';

const routes: Routes = [
  {path:'',component:SpaceDetailComponent,
  },
  {path:':id',component:SpaceDetailComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceDetailRoutingModule { }
