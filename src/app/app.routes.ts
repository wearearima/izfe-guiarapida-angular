import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';

export const routes: Routes = [
  {
    path: '',
    component: ListaComponent
  },
  {
    path: 'nueva-cuenta',
    component: NuevoUsuarioComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  }
];
