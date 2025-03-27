import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  constructor( private formBuild: FormBuilder ){}
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
    console.log("Enviado", formValue)
  }

  clickRegister(): void {
    this.setUserInput.emit("register");
  }
}

