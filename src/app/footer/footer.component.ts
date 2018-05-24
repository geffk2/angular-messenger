import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message-service/message.service";
import {LoginService} from "../login-service/login.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private messageService: MessageService, private login: LoginService) { }
  ngOnInit() {}

  sendMessage(): void {
    this.messageService.sendMessage(this.text).subscribe();
    this.text = '';
  }
  text: string = '';
}
