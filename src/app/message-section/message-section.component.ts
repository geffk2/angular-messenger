import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message-service/message.service";
import {Message} from "../message/message";

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(private messageService: MessageService) {}
  messages: Message[] = this.messageService.getMessages();

  ngOnInit() {
    setInterval(() => {
      this.messages = this.messageService.getMessages();
      console.log("Updated");
    }, 10000);
  }
}
