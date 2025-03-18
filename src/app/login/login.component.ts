import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    // Definir campos del formulario
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // Activa "cargando"
    this.loading = true;

    // Destructura valores del formulario
    const { email, password } = this.loginForm.value;

    // Llamar al servicio
    this.authService.login(email, password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        alert('Login exitoso');
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        alert('Login fallido: credenciales inválidas o error en el servidor');
        this.loading = false;
      }
    });
  }
}