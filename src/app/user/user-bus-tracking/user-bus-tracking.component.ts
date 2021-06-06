import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { BusRoute } from 'src/app/BusRoute';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-user-bus-tracking',
  templateUrl: './user-bus-tracking.component.html',
  styleUrls: ['./user-bus-tracking.component.scss']
})
export class UserBusTrackingComponent implements OnInit {
  formdata!: FormGroup;
  busRoute!: BusRoute;
  isTracking: boolean = false;
  routeNumberList: any[] = [5, 2, 3, 6];
  constructor(private service: UtilService,
    private appService: AppService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      routeNumber: new FormControl("", Validators.required),
    });
  }

  track() {
    if (this.formdata.valid) {
      this.appService.getBusRouteByRouteId(this.formdata.value.routeNumber).subscribe(res => {
        if (res) {
          this.isTracking = true;
          this.busRoute = res;
        } else {
          alert("Invalid Bus Route !!!");
        }
      });
    } else {
      alert("Select Bus Route !!!");
    }
  }

}
