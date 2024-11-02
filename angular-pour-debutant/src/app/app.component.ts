import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
<router-outlet></router-outlet>
    
  `,
    styles: [`
  nav{
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin:1rem;

    ul{
      display: flex;
    }
    li{
      margin-left: 1rem;
      list-style: none;
    }
    a{
       text-decoration: none;
       color: inherit;

    }
    .active{
    color: red;
    text-decoration: underline;
  }
  }
  
  `,
  ],
    imports: [ RouterModule],
})
export class AppComponent {
  
}
