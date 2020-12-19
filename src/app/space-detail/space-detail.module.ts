import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceDetailComponent } from './space-detail/space-detail.component';
import { SpaceDetailRoutingModule } from './space-detail-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../service/dashbord.service';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [SpaceDetailComponent],
  imports: [
    CommonModule,
    SpaceDetailRoutingModule,
    HttpClientModule,
    NgxLoadingModule
  ],
  providers:[DashboardService]
})
export class SpaceDetailModule { }
