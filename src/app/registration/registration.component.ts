import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  todaydate: any;
  componentproperty: any;
  emailid: any;
  formdata!: FormGroup;
  genderList: any[] = [
   {value: 'male', viewValue: 'Male'},
   {value: 'female', viewValue: 'Female'}
 ];

  constructor() { }
  
  ngOnInit() {
     this.formdata = new FormGroup({
        emailid: new FormControl("", Validators.compose([
           Validators.required,
           Validators.pattern("[^ @]*@[^ @]*")
        ])),
        passwd: new FormControl("", Validators.required),
        name: new FormControl("", Validators.required),
        mobileNum: new FormControl("", Validators.required),
        gender: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
        dob: new FormControl("", Validators.required)
     });
  }
  
  submit() {
   if (this.formdata.valid) {
      alert("User registered successfully !!!");
   } else {
      alert("Fill out all the required fields !!!");
   }
  }
}
