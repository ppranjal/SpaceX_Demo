import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http_: HttpClient) { }

  getSapceData() {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    return this.http_.get(url);
  }

  getSpaceByLaunchYr(year) {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=';
    return this.http_.get(url + year.id);
  }

  getSpaceByLaunchStatus(param) {

    let url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=';
    return this.http_.get(url + param.value);
  }

  getSpaceByLandingStatus(param) {

    let url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=';
    return this.http_.get(url + param.value);
  }

}
