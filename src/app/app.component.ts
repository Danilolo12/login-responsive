import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <app-login></app-login>
  `,
  imports: [LoginComponent]
})
export class AppComponent {}
