import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/service/dashbord.service';

@Component({
  selector: 'app-space-launch',
  templateUrl: './space-launch.component.html',
  styleUrls: ['./space-launch.component.scss']
})
export class SpaceLaunchComponent implements OnInit {

  data;
  public loading:boolean=false;
  constructor(private route: ActivatedRoute,
    private _http: DashboardService) { }

  ngOnInit() {

    this.route.params.subscribe(val => {
      this.IsSpaceLaunching(val);
    })
  }

  IsSpaceLaunching(value) {
    this.loading=true;
    this._http.getSpaceByLaunchStatus(value).subscribe((res: any) => {
      console.log('launch successful space is :', res);
      this.loading=false;
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
    })
  }

}
