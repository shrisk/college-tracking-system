import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setUserActivate(isActivate: boolean) {
    const msg = isActivate ? 'activated' : 'deactivated';
    alert('User is ' + msg + ' successfully !!!' );
  }

}
