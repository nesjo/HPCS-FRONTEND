import { seguridadDetailsComponent } from './seguridad-details/seguridad-details.component';
import { CreateseguridadComponent } from './create-seguridad/create-seguridad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { seguridadListComponent } from './seguridad-list/seguridad-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'seguridad', pathMatch: 'full' },
  { path: 'seguridad', component: seguridadListComponent },
  { path: 'add', component: CreateseguridadComponent },
  { path: 'details/:id', component: seguridadDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }