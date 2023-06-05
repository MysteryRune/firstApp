import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full',
  },
  {
    path: 'test',
    loadComponent: () => import('./test/test.page').then( m => m.TestPage)
  },
  {
    path: 'test2',
    loadComponent: () => import('./test2/test2.page').then( m => m.Test2Page)
  },
];
