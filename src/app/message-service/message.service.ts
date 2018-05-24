import { Injectable } from '@angular/core';
import { Message } from "../message/message";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {}

  public messages: Message[] = [

  ];

  serverIP:string = 'localhost';

  getMessages(): Message[] {
    this.messages = [];
    this.http.get('http://'+this.serverIP+':1488/getMessages/').subscribe(data => {
      for(let i: number = 0; i < data['length']; i++) {
        this.messages.push(new Message(data[i]['text'], data[i]['sender']));
      }
    });
    return this.messages;
  }

  sendMessage(text: string) {
    const body = {
      sender: "Mark",
      text: text
    };
    return this.http.post("http://"+this.serverIP+":1488/sendMessage/", body, {headers: new HttpHeaders().append('Access-Control-Allow-Origin','*')});
  }

}
