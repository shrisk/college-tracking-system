import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-busroute',
  templateUrl: './admin-busroute.component.html',
  styleUrls: ['./admin-busroute.component.scss']
})
export class AdminBusrouteComponent implements OnInit {
  formdata!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
       routeNo: new FormControl("", Validators.required),
       busNo: new FormControl("", Validators.required),
       driverName: new FormControl("", Validators.required),
       source: new FormControl("", Validators.required),
       sourceLat: new FormControl("", Validators.required),
       sourcelong: new FormControl("", Validators.required),
       destination: new FormControl("", Validators.required),
       destinationLat: new FormControl("", Validators.required),
       destinationlong: new FormControl("", Validators.required)
    });
 }

 addBusRoute() {
   if (this.formdata.valid) {
    alert("Bus route added successfully !!!");
   } else {
    alert("Complete all required fields !!!");
   }
 }

}
