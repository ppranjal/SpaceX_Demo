import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashbord.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public data: [] = [];
  public loading: boolean = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.getDataOnLoad();
  }

  getDataOnLoad() {
    this.loading = true;
    this.dashboardService.getSapceData().subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      if (res.length > 0)
        this.data = res.map(data => {
          return ({
            'mission_name': data.mission_name, 'flight_number': data.flight_number, 'mission_id': data.mission_id,
            'launch_year': data.launch_year, 'launch_success': data.launch_success,'mission_patch':data.links.mission_patch,
            'land_success':data.rocket.first_stage.cores[0].land_success
          })

        });

      else
        this.data = [];
    });
  }

}
