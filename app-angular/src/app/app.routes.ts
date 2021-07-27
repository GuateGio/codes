import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './module-gestion/components/home/home.component';
import { ModuleGestionRoutes } from './module-gestion/module-gestion-routes';

const ROUTES: Routes = [
    { 
        path: 'gestion', 
        component: HomeComponent,
        children: ModuleGestionRoutes,
    },
    { path: '**', pathMatch: 'full', redirectTo: 'gestion' }
];

export const ROUTING = RouterModule.forRoot(ROUTES, {useHash: true})
