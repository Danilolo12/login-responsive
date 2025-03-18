// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}
  
    login(email: string, password: string): Observable<any> {
      // Simulamos un retraso de 1 segundo y retornamos un objeto con un "token"
      return of({
        message: 'Login exitoso (simulado)',
        token: 'fake-token-123'
      }).pipe(
        delay(1000)  // Espera 1 segundo para simular red real
      );
    }
  }