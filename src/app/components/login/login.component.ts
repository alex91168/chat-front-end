import { Component } from '@angular/core';
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from './user-register/user-register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UserLoginComponent, UserRegisterComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userInput: string = "login"

  setUserInput(input: string): void {
    this.userInput = input;
  }

}
