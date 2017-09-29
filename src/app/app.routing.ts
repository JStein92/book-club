import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import {AboutComponent} from './about/about.component';
import { AddMemberComponent } from './add-member/add-member.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'add-member',
    component: AddMemberComponent
  },
  {
    path:'member-details/:key',
    component: MemberDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
