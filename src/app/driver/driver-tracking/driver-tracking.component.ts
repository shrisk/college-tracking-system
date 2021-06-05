import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-tracking',
  templateUrl: './driver-tracking.component.html',
  styleUrls: ['./driver-tracking.component.scss']
})
export class DriverTrackingComponent implements OnInit {
  formdata!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
       routeNo: new FormControl("", Validators.required),
       source: new FormControl("", Validators.required),
       sourceLat: new FormControl("", Validators.required),
       sourcelong: new FormControl("", Validators.required)
    });
 }

 addBusRoute() {
   if (this.formdata.valid) {
    alert("Tracking Details added successfully !!!");
   } else {
    alert("Complete all required fields !!!");
   }
 }
}
