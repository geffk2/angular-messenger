import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from "./message-service/message.service";
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { LoginService } from "./login-service/login.service";
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FooterComponent,
    SideMenuComponent,
    NavbarComponent,
    MessageSectionComponent,
    LoginSectionComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService, HttpClientModule, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
