import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
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
       name: new FormControl("", Validators.required),
       mobileNum: new FormControl("", Validators.required),
       gender: new FormControl("", Validators.required),
       address: new FormControl("", Validators.required),
    });
 }

}
