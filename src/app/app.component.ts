import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { map } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
<h1>Angular RxJs (Observable)</h1>
<ul>
  <li *ngFor="let post of posts$ | async">
    {{post}} - {{post.body}}
  </li>
</ul>

  `,
  styles: [],
})
export class AppComponent {
  private http = inject(HttpClient);
  posts$ = this.http.get <any[]>('https://jsonplaceholder.typicode.com/posts');

  ngOnInit(){
   this.posts$ = this.posts$.pipe(
    map((posts) => ['Olivia', 'Coulibaly', ...posts]),
  );
  }
}
