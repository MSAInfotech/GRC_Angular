import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectControlsViewComponent } from './project-controls-view/project-controls-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'project-create', component: ProjectCreateComponent },
    { path: 'project-details', component: ProjectDetailsComponent },
    { path: 'project-controls-view', component: ProjectControlsViewComponent },
    { path: 'project-view', component: ProjectViewComponent },

    
    // { path: '**', component: PageNotFoundComponent },
];