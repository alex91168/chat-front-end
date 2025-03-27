import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EndpointService } from '../../../services/endpoints/endpoint.service';
import { UserLogin } from '../../../Models/User';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  constructor( private formBuild: FormBuilder, private endpoint: EndpointService, private router: Router ){}
  @Output() setUserInput = new EventEmitter<string>();
  loginForm!: FormGroup; 

  ngOnInit(): void{
    this.loginForm = this.formBuild.group({
      user: [''],
      password: ['']
    })
  }

  formSubmit(): void {
    if (!this.loginForm.valid) throw new Error("Formulário inválido.")
    const userValue: UserLogin = this.loginForm.value;
    this.loginUser(userValue);
    console.log("Enviado", userValue)
  }


  loginUser(userDetails: UserLogin): void {
    this.endpoint.login_user(userDetails).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(["/"])
      },
      error: (err) => console.log(err)
    })
  }

  clickRegister(): void {
    this.setUserInput.emit("register");
  }
}

