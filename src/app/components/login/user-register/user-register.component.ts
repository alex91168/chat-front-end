import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EndpointService } from '../../../services/endpoints/endpoint.service';
import { UserRegister } from '../../../Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {
  constructor ( private formBuild: FormBuilder, private endpoint: EndpointService, private router: Router){}
  @Output() setUserInput = new EventEmitter<string>();
  formRegister!: FormGroup;

  ngOnInit(): void {
    this.formRegister = this.formBuild.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      email: ['', Validators.email]
    })
  }

  formSubmit(): void {
    if (!this.formRegister.valid) throw new Error("Formulário inválido.")
    const userInfo: UserRegister = this.formRegister.value;
    if (userInfo.password !== userInfo.repassword) throw new Error("As senhas devem ser iguais.")
    this.registerUser(userInfo)
    console.log("Formulario de registro", userInfo)
  }
  registerUser(userRegister: UserRegister): void {
    this.endpoint.register_user(userRegister).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(["/email-activation"])
      },
      error: (err) => console.log(err)
    })
  }
  clickLogin(): void {
    this.setUserInput.emit("login");
  }
}
