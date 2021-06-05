import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.scss']
})
export class DriverLoginComponent implements OnInit {
  formdata!: FormGroup;
  routeNumberList: any[] = [5, 2, 3, 6];
  constructor(
     private service: UtilService,
     private router: Router
  ) { }

  ngOnInit() {
     this.service.isHome.next(true);
     this.formdata = new FormGroup({
        driverName: new FormControl("", Validators.required),
        routeNumber: new FormControl("", Validators.required),
     });
  }

  login() {
     if (this.formdata.valid) {
        alert("Driver logged in successfully !!!");
        this.service.isHome.next(false);
        this.router.navigateByUrl('/driver/home');
     } else {
        alert("Invalid credentails !!!");
     }
  }

}
