import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required])
  })

  onSubmitLogin() {
    const { nome, senha } = this.loginForm.value

    if (!this.loginForm.valid || !nome || !senha) {
      alert("Preencha todos os campos corretamente.")
      return
    } 
  }
} 
