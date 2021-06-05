import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isHome!: Boolean;
  constructor(private service: UtilService,) { }

  ngOnInit(): void {
    this.service.isHome.subscribe(res => {
      this.isHome = res;
    });
  }

}
