import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {LoginService} from "../login-service/login.service";

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css']
})
export class LoginSectionComponent implements OnInit {
  @ViewChild('dropdownMenu') menu: ElementRef;

  constructor(private login: LoginService) { }

  loginClick() {
    this.login.switchMode();
  }

  ngOnInit() {
  }

}
