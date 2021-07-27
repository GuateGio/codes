import { Routes } from '@angular/router';
import { GestionComponent } from './components/gestion/gestion.component';

export const ModuleGestionRoutes: Routes = [
  { path: 'administracion', component: GestionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'administracion' }
]
