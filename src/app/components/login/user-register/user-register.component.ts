import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-register',
  imports: [],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {
  @Output() setUserInput = new EventEmitter<string>();

  clickLogin(): void {
    this.setUserInput.emit("login");
  }
}
