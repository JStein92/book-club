import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {AddProjectComponent} from './add-project/add-project.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'projects/:key',
    component: ProjectDetailsComponent
  },
  {
    path:'add-project',
    component: AddProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
