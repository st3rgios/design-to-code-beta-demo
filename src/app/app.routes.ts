import { Routes } from '@angular/router';
import { Showcase } from './showcase/showcase';

export const routes: Routes = [
  { path: '', redirectTo: 'showcase', pathMatch: 'full' },
  { path: 'showcase', component: Showcase },
];
