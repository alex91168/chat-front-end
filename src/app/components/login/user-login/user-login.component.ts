import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-login',
  imports: [],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  
  @Output() setUserInput = new EventEmitter<string>();

  clickRegister(): void {
    this.setUserInput.emit("register");
  }
}

