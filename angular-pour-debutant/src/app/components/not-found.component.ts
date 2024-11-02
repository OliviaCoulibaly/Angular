import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div align="center">
<h2>La page que vous cherchez n'existe pas</h2>
<a routerLink="/">Retour à la page d'accueil</a>
    </div>
  `,
  styles: [
  ]
})
export default class NotFoundComponent {

}
