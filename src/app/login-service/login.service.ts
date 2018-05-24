import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  public mode: boolean = true;
  public switchMode(): void {
    this.mode = !this.mode;
  }

}
