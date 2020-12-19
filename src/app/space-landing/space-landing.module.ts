import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceLandingComponent } from './space-landing/space-landing.component';
import { SpaceLandingRoutingModule } from './space-landing-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../service/dashbord.service';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [SpaceLandingComponent],
  imports: [
    CommonModule,
    SpaceLandingRoutingModule,
    HttpClientModule,
    NgxLoadingModule
  ],
  providers:[DashboardService]
})
export class SpaceLandingModule { }
