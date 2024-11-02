import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  <div class="dashboard-container">
    <header class="toolbar">
      <h1>Gestion de stock</h1>
      <button (click)="logout()">Déconnexion</button>
    </header>
    <main>
      <aside class= "side-nav">
        <ul>
          <li><a routerLink="/overview" routerLinkAction="active">Vue d'ensemble</a></li>
          <li><a routerLink="/gestion-de-stock" routerLinkAction="active">Gestion de stock</a></li>
          <li><a routerLink="/finance" routerLinkAction="active">Finance</a></li>
        </ul>
      </aside>
      <div class="content-container">
        <router-outlet></router-outlet>
      </div>
    </main>
  </div>
  
  `,
  styles: [`
    .dashboard-container{
      height: 100vh;
      width: 100vw;
    }

    .toolbar{
      height: 10%;
      display: flex;
      justify-content: space-between;
      margin: 0 1rem;
    }

    main{
      height:90%;
      display:flex;
      font-size: 1.2rem;

      .side-nav{
          padding: 1rem;
          width:15rem;
          background: coral;
      }

      li{
        list-style:none;
        margin: 1rem 0;
      }

      a{
        display: inline;
        text-decoration: none;
        color: inherit;
      }

      .active{
        text-decoration: underline;
        background: lightgray;
      }

      .content-container{
        width: 100%;
        background: lightgreen;
      }
    }
  
  `
  ],
})
export default class DashboardComponent {
  private router = inject(Router)
  logout(){
    localStorage.removeItem('password');
    this.router.navigate(['login']);
  }
}