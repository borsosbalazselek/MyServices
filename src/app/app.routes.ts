import { Routes } from '@angular/router';
import { SelectorComponent } from './pages/selector/selector.component';

export const routes: Routes = [
  {
    path: '',
    component: SelectorComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
