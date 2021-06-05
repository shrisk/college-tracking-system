import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-bus-tracking',
  templateUrl: './user-bus-tracking.component.html',
  styleUrls: ['./user-bus-tracking.component.scss']
})
export class UserBusTrackingComponent implements OnInit {
  formdata!: FormGroup;
  routeNumberList: any[] = [5, 2, 3, 6];
  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      routeNumber: new FormControl("", Validators.required),
    });
  }

  track() {
    // if (this.formdata.valid) {
    //    alert("Driver logged in successfully !!!");
    // } else {
    //    alert("Invalid credentails !!!");
    // }
 }

}
