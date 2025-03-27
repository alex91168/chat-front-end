import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {
  constructor ( private formBuild: FormBuilder){}
  @Output() setUserInput = new EventEmitter<string>();
  formRegister!: FormGroup;

  ngOnInit(): void {
    this.formRegister = this.formBuild.group({
      user: [''],
      password: [''],
      repassword: [''],
      email: ['']
    })
  }

  formSubmit(): void {
    if (!this.formRegister.valid) throw new Error("Formulário inválido.")
    const formRegister = this.formRegister.value;
    console.log("Formulario de registro", formRegister)
  }
  clickLogin(): void {
    this.setUserInput.emit("login");
  }
}
