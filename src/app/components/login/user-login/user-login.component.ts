import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EndpointService } from '../../../services/endpoints/endpoint.service';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  constructor( private formBuild: FormBuilder, private endpoint: EndpointService ){}
  @Output() setUserInput = new EventEmitter<string>();
  loginForm!: FormGroup; 

  ngOnInit(): void{
    this.loginForm = this.formBuild.group({
      email: [''],
      password: ['']
    })
  }

  formSubmit(): void {
    if (!this.loginForm.valid) throw new Error("Formulário inválido.")
    const formValue = this.loginForm.value;

    this.loginUser(formValue.email, formValue.password)
    console.log("Enviado", formValue)
  }


  loginUser(email: string, password: string): void {
    this.endpoint.login_user(email, password).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => console.log(err)
    })
  }

  clickRegister(): void {
    this.setUserInput.emit("register");
  }
}

