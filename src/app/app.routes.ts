import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
    { path: 'papers', loadComponent: () => import('./components/papers/papers.component').then(m => m.PapersComponent) },
    { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
    { path: 'project/:id', loadComponent: () => import('./components/project/project.component').then(m => m.ProjectComponent) },
    { path: '**', redirectTo: '' }
];
