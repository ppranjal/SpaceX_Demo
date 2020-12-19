import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/service/dashbord.service';

@Component({
  selector: 'app-space-landing',
  templateUrl: './space-landing.component.html',
  styleUrls: ['./space-landing.component.scss']
})
export class SpaceLandingComponent implements OnInit {

  data;
  public loading:boolean=false;

  constructor(private route: ActivatedRoute,
    private _http: DashboardService) { }

  ngOnInit() {

    this.route.params.subscribe(val => {
      console.log('value is :', val);
      this.IsSpaceLanding(val);
    })
  }

  IsSpaceLanding(value) {
    this.loading=true;
    this._http.getSpaceByLandingStatus(value).subscribe((res: any) => {
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
