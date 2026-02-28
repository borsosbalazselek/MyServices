import { Routes } from '@angular/router';
import { SelectorComponent } from './pages/selector/selector.component';

export const routes: Routes = [
  { path: '',       loadComponent: () => import('./pages/selector/selector.component').then(m => m.SelectorComponent) },
  { path: 'iot',   loadComponent: () => import('./pages/iot/iot.component').then(m => m.IotComponent) },
  { path: 'autoweb',   loadComponent: () => import('./pages/autoweb/autoweb.component').then(m => m.AutowebComponent) },
  { path: 'behavior',   loadComponent: () => import('./pages/behavior/behavior.component').then(m => m.BehaviorComponent) },
  { path: 'ailearn',   loadComponent: () => import('./pages/ailearn/ailearn.component').then(m => m.AilearnComponent) },
  { path: '**', redirectTo: '' },
  
];
