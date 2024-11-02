import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
 <div align="center">
  <h2>Connectez-vous</h2>
  <input type="password" name="password" [(ngModel)]="password">
  <button (click)="login()" [disabled]="!password">Login</button>
 </div>
  `,
  styles: [
  ]
})
export default class LoginComponent {
  password!: string;
  private router = inject(Router)
  login(){
localStorage.setItem('password', this.password);
this.router.navigate(['/']);
  }

}
