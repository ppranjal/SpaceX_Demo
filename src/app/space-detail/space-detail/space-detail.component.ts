import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/service/dashbord.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-space-detail',
  templateUrl: './space-detail.component.html',
  styleUrls: ['./space-detail.component.scss']
})
export class SpaceDetailComponent implements OnInit {

  public loading:boolean=false;
  data;
  constructor(private router: ActivatedRoute,
    private dashboardService: DashboardService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.router.params.subscribe(year => {
      if (year)
       this.spaceDetailByLaunchYr(year);
    })
  }


  spaceDetailByLaunchYr(year) {
    this.loading=true;
    this.dashboardService.getSpaceByLaunchYr(year).subscribe((res: any) => {
      console.log('res is :', res);
      this.loading=false;
      if (res.length > 0)
        this.data = res.map(data => {
          return ({
            'mission_name': data.mission_name, 'flight_number': data.flight_number, 'mission_id': data.mission_id,
            'launch_year': data.launch_year, 'launch_success': data.launch_success,'mission_patch':data.links.mission_patch,
            'land_success':data.rocket.first_stage.cores[0].land_success
          })

        });
      else{
        this.data = [];
        this.toastr.info("No Data Available!!!");
      }
        
    })
  }

}
