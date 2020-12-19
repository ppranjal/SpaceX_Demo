import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceLaunchComponent } from './space-launch/space-launch.component';
import { SpaceLaunchRoutingModule } from './space-launch-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../service/dashbord.service';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [SpaceLaunchComponent],
  imports: [
    CommonModule,
    SpaceLaunchRoutingModule,
    HttpClientModule,
    NgxLoadingModule
  ],
  providers:[DashboardService]
})
export class SpaceLaunchModule { }
