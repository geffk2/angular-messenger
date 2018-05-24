import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login-service/login.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private login: LoginService) { }

  public getMode() {
    return this.login.mode;
  }

  ngOnInit() {
  }

}
