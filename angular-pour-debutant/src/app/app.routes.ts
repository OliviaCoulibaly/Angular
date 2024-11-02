import { inject } from "@angular/core";
import { Routes } from "@angular/router";
import { PostService } from "./services/post.service";


export const appRoutes: Routes = [
    {
        path:'login',
        loadComponent: () => import('./components/login/login.component'),
    },
{
    path: '',
    loadComponent: () => import('./components/dashboard/dashboard.component'),
    canActivate:[() => inject(PostService).isLoggedIn()],
    children:[
        {
            path:'overview',
            title:'Dashboard - Gestock',
            loadComponent: () => import('./components/dashboard/overview/overview.component')
        },
        {
            path:'gestion-de-stock',
            title:'Gestion de stock - GeStock',
            loadComponent: () => import('./components/dashboard/gestion-de-stock/gestion-de-stock.component'),
            children:[
                {
                    path:'vente',
                    title: 'Vente - GeStock',
                    loadComponent: () => import('./components/dashboard/gestion-de-stock/vente.component'),
                },
                {
                    path:'approvionement',
                    title: 'Approvisionement - GeStock',
                    loadComponent: () => import('./components/dashboard/gestion-de-stock/approvisionement.component'),
                },
                {
                    path:'stock',
                    title: 'Stock - GeStock',
                    loadComponent: () => import('./components/dashboard/gestion-de-stock/stock.component'),
                },
                {
                    path: '',
                    redirectTo: 'vente',
                    pathMatch:'full'
                },
            ],
        },
        {
            path:'finance',
            title: 'Finance - GeStock',
            loadComponent: () => import('./components/dashboard/finance/finance.component')
        },
        {
            path: '',
            redirectTo: 'overview',
            pathMatch:'full'
        }

    ]
},
{
    path: '**',
    loadComponent: () => import('./components/not-found.component')
}



];